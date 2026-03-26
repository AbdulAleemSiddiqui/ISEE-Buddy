import { describe, it, expect } from "vitest";
import { calculateISEE } from "@/lib/isee-calculator";

describe("calculateISEE", () => {
  it("applies formula (ISR + 0.20 * ISP) / P with surcharges", () => {
    const result = calculateISEE({
      adults: 2,
      minorChildren: 2,
      bothParentsWork: true,
      totalIncome: 40000,
      annualRent: 0,
      bankBalances: 100000,
      govBondsAmount: 50000,
      homeValue: 200000,
      remainingMortgage: 50000,
      isMetropolitanCity: true,
    });

    expect(result.householdSize).toBe(4);
    expect(result.baseScale).toBe(2.46);
    expect(result.surcharges).toBe(0.7); // 2 minors * 0.2 + both parents 0.3
    expect(result.equivalenceScale).toBeCloseTo(3.16, 2);
    expect(result.govBondsExclusion).toBe(50000);
    expect(result.realEstateFranchise).toBe(120000);

    // ISR: 40000, ISP movable: (100000-50000-12000)=38000; ISP real estate: (150000-120000)=30000
    expect(result.isr).toBe(40000);
    expect(result.isp).toBe(68000);
    expect(result.isee).toBeCloseTo((40000 + 68000 * 0.2) / 3.16, 2);
  });

  it("clamps household size to max 5 for base scale", () => {
    const result = calculateISEE({
      adults: 8,
      minorChildren: 2,
      bothParentsWork: false,
      totalIncome: 1000,
      annualRent: 0,
      bankBalances: 0,
      govBondsAmount: 0,
      homeValue: 0,
      remainingMortgage: 0,
      isMetropolitanCity: false,
    });
    expect(result.householdSize).toBe(10);
    expect(result.baseScale).toBe(2.85);
  });
});
