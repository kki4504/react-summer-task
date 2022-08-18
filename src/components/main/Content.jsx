const Content = ({content}) => {
  return (
    <div className="mb-20">
      {/* 카테고리 / 날짜*/}
      <div className="flex text-sm">
        <div className="grow">
          {content.category}
        </div>
        <div>
          {content.date}
        </div>
      </div>
      {/* 제목 */}
      <div className="font-medium text-3xl">
        {content.title}
      </div>
      <hr className="mt-5 mb-3"/>
      {/* 내용 */}
      <div className="ml-2">
        <img className="max-h-96" src={content.image} alt="" />
        {content.body}
      </div>
      <hr className="mt-5 mb-3"/>
    </div>
  )
}

export default Content