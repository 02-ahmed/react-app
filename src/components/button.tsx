interface Props {
  children:string;
  onClick: () => void;
  color?: 'primary'|'secondary'|'danger'|'warning';
}

/* function Button({ButtonText}:Props) {
  return (
    <div>
      <button className="btn btn-primary">{ButtonText}</button>
    </div>
  )
} */

const Button = ({children, onClick, color='primary'}:Props) => {
  return (
    <button className={'btn btn-' + color } onClick={onClick}>{children}</button>
  )
}

export default Button