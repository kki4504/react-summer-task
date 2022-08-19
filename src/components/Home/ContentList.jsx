const ContentList = ({content}) => {
  return (
    <div className="mx-14 my-2 items-center flex border-b">
      {/* id */}
      <div className="w-20 text-center">
        {content.id}
      </div>
      {/* title */}
      <div className="flex-1">
        {content.title}
      </div>
      {/* date */}
      <div>
        {content.date}
      </div>
    </div>
  )
}

export default ContentList;