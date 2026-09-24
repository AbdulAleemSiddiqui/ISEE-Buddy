import { describe, it, expect } from "vitest";
import { calculateISEE } from "@/lib/isee-calculator";

const baseInput = {
  adults: 2,
  minorChildren: 2,
  bothParentsWork: false,
  hasChildUnder3: false,
  totalIncome: 40000,
  annualRent: 0,
  bankBalances: 100000,
  govBondsAmount: 50000,
  homeValue: 200000,
  remainingMortgage: 50000,
  isMetropolitanCity: true,
};

describe("calculateISEE", () => {
  it("applies formula (ISR + 0.20 * ISP) / equivalence scale", () => {
    const result = calculateISEE({ ...baseInput, hasChildUnder3: true, bothParentsWork: true });

    expect(result.householdSize).toBe(4);
    expect(result.baseScale).toBe(2.46);
    expect(result.surcharges).toBe(0.3); // +0.3 (child under 3 + parents worked >= 6 months)
    expect(result.equivalenceScale).toBeCloseTo(2.76, 2);
    expect(result.govBondsExclusion).toBe(50000);
    expect(result.realEstateFranchise).toBe(120000);

    // ISP movable: (100000-50000-10000)=40000 (franchise capped at 10.000); ISP real estate: (150000-120000)=30000
    expect(result.isr).toBe(40000);
    expect(result.isp).toBe(70000);
    expect(result.isee).toBeCloseTo((40000 + 70000 * 0.2) / 2.76, 2);
  });

  it("adds +0.2 once for nuclei with minor children, not per child", () => {
    const result = calculateISEE(baseInput);
    expect(result.surcharges).toBe(0.2);
  });

  it("raises the surcharge to +0.3 only with child under 3 AND parent worked >= 6 months", () => {
    expect(calculateISEE({ ...baseInput, hasChildUnder3: true, bothParentsWork: false }).surcharges).toBe(0.2);
    expect(calculateISEE({ ...baseInput, hasChildUnder3: false, bothParentsWork: true }).surcharges).toBe(0.2);
    expect(calculateISEE({ ...baseInput, hasChildUnder3: true, bothParentsWork: true }).surcharges).toBe(0.3);
  });

  it("adds no surcharge without minor children", () => {
    const result = calculateISEE({ ...baseInput, minorChildren: 0, bothParentsWork: true, hasChildUnder3: false });
    expect(result.surcharges).toBe(0);
  });

  it("caps the movable franchise base at 10.000 and adds 1.000 per child beyond the second", () => {
    // 4 members: base would be 6000+3*2000=12000, capped at 10000; 2 children -> +0
    expect(calculateISEE(baseInput).movableFranchise).toBe(10000);

    // 3 children -> +1.000
    expect(calculateISEE({ ...baseInput, minorChildren: 3 }).movableFranchise).toBe(11000);

    // small household stays under the cap: 1 adult 1 child = 6000+2000=8000, +0 (only 1 child)
    expect(
      calculateISEE({ ...baseInput, adults: 1, minorChildren: 1 }).movableFranchise
    ).toBe(8000);
  });
});
