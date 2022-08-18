const Content = ({content}) => {
  return (
    <div>
      {/* 제목 */}
      <div className="font-bold">
        {content.title}
      </div>
      <hr />
    </div>
  )
}

export default Content