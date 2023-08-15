
type randomNumberType = {
  value: number;
};
type positiveNumber = randomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type negativeNumber = randomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};
type zero = randomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};


type RandomNumberProps = negativeNumber | positiveNumber | zero
export const RandomNumber = ({
  value,
  isNegative,
  isPositive,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"} {"  "}
      {isZero && "zero"}
    </div>
  );
};
