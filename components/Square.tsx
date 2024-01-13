import React from 'react';

interface SquareProps {
  value: string;
  onClick: () => void;
  quina: number;
}

const Square = (props:SquareProps) => {

  const styleQuina = {
    borderTopLeftRadius: props.quina === 1 ? "10%" : "0%",
    borderTopRightRadius:props.quina === 2 ? "10%" : "0%",
    borderBottomLeftRadius:props.quina === 3 ? "10%" : "0%",
    borderBottomRightRadius:props.quina === 4 ? "10%" : "0%",
  }

  return (
    <button className="square" onClick={props.onClick} style={styleQuina}>
      {props.value}
    </button>
  );
};

export default Square;