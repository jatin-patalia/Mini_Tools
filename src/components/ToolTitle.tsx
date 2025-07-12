type ToolTitle = {
  title: string
}
const ToolTitle: React.FC<ToolTitle> = ({ title }) => {
  return (
    <h2 className="text-2xl font-bold mb-4 text-center text-title">{title}</h2>
  )
}

export default ToolTitle
