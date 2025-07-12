type ButtonProps = {
  title: string
  cssClass?: string
  noFullWidth?: boolean
  clickHandler: () => void
}

const Button: React.FC<ButtonProps> = ({
  title,
  clickHandler,
  cssClass,
  noFullWidth,
}) => {
  const baseClass =
    "bg-primary hover:bg-hover text-white font-semibold py-2 px-4 rounded-lg"
  const fullWidthClass = noFullWidth ? "" : " w-full"
  const className = cssClass ?? `${baseClass}${fullWidthClass}`

  return (
    <button onClick={clickHandler} className={className}>
      {title}
    </button>
  )
}

export default Button
