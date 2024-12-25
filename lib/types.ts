export interface BankDetails {
  accountNumber: string;
  bankName: string;
}

export interface ClaimedReward {
  personId: string;
  bankDetails: BankDetails;
  claimedAt: string;
}