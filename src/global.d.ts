// This is needed for typescript to recognize importing images as valid.

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}
// you can add more when needed
