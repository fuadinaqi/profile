import { Block } from "./style";

export default function Blocks({ arrayNum, stage, answer, result, preventClick, onClickBlock }) {
  return (
    <>
      {arrayNum.map((num, i) => {
        if (stage === 1) return <Block key={i.toString()}>{num}</Block>;
        if (stage === 3) {
          if (answer === num) {
            return (
              <Block correct={answer === result} key={i.toString()}>
                {num}
              </Block>
            );
          } else if (result === num) {
            return (
              <Block correct key={i.toString()}>
                {num}
              </Block>
            );
          }
        }
        return (
          <Block key={i.toString()} onClick={!preventClick ? onClickBlock(num) : () => null} />
        );
      })}
    </>
  );
}
