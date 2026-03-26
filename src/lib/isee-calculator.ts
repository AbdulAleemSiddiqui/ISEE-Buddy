export interface ISEEInput {
  adults: number;
  minorChildren: number;
  bothParentsWork: boolean;
  totalIncome: number;
  annualRent: number;
  bankBalances: number;
  govBondsAmount: number;
  homeValue: number;
  remainingMortgage: number;
  isMetropolitanCity: boolean;
}

export interface ISEEResult {
  isee: number;
  isr: number;
  isp: number;
  ispMovable: number;
  ispRealEstate: number;
  equivalenceScale: number;
  baseScale: number;
  surcharges: number;
  householdSize: number;
  rentDeduction: number;
  govBondsExclusion: number;
  movableFranchise: number;
  realEstateFranchise: number;
}

const BASE_SCALES: Record<number, number> = {
  1: 1.0,
  2: 1.57,
  3: 2.04,
  4: 2.46,
  5: 2.85,
};

export function calculateISEE(input: ISEEInput): ISEEResult {
  const householdSize = input.adults + input.minorChildren;
  const clampedSize = Math.min(Math.max(householdSize, 1), 5);
  const baseScale = BASE_SCALES[clampedSize];

  // Surcharges
  const childSurcharge = input.minorChildren * 0.20;
  const workSurcharge = input.bothParentsWork ? 0.30 : 0;
  const surcharges = childSurcharge + workSurcharge;
  const equivalenceScale = baseScale + surcharges;

  // ISR (Income)
  const maxRentDeduction = 7000;
  const rentDeduction = Math.min(input.annualRent, maxRentDeduction);
  const isr = Math.max(input.totalIncome - rentDeduction, 0);

  // ISP - Movable assets
  const govBondsExclusion = Math.min(input.govBondsAmount, 50000);
  const netBankBalances = Math.max(input.bankBalances - govBondsExclusion, 0);
  const extraMembers = Math.max(householdSize - 1, 0);
  const movableFranchise = 6000 + (extraMembers * 2000);
  const ispMovable = Math.max(netBankBalances - movableFranchise, 0);

  // ISP - Real estate
  const realEstateFranchise = input.isMetropolitanCity ? 120000 : 91500;
  const netHomeValue = Math.max(input.homeValue - input.remainingMortgage, 0);
  const ispRealEstate = Math.max(netHomeValue - realEstateFranchise, 0);

  const isp = ispMovable + ispRealEstate;

  // Final ISEE
  const isee = (isr + isp * 0.20) / equivalenceScale;

  return {
    isee: Math.round(isee * 100) / 100,
    isr,
    isp,
    ispMovable,
    ispRealEstate,
    equivalenceScale: Math.round(equivalenceScale * 100) / 100,
    baseScale,
    surcharges: Math.round(surcharges * 100) / 100,
    householdSize,
    rentDeduction,
    govBondsExclusion,
    movableFranchise,
    realEstateFranchise,
  };
}
