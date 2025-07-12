type ButtonProps = {
  title: string
  clickHandler: () => void
}
const Button: React.FC<ButtonProps> = ({ title, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className="bg-primary hover:bg-hover text-white font-semibold py-2 px-4 rounded-lg w-full"
    >
      {title}
    </button>
  )
}

export default Button
