
const VisualizeData = ({ actionsTop, content, actionBottom, }) => {
  return (

    <div className='min-h-screen min-w-full'>
      {
        actionsTop && (<div className='flex flex-row justify-end'>
          {
            actionsTop
          }
        </div>)
      }
      {
        content && (content)
      }
      {
        actionBottom && (actionBottom)
      }
    </div>

  )
}

export default VisualizeData