export interface IStep {
  number: number;
  title: string;
  color: string;
  description: string;
  additionalInfo?: string | null;
};

export interface ITestimony {
  id: number;
  opinion: string;
  name: string;
  photo: string;
  job: string;
}
