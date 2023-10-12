import { LoadingOutlined } from "@ant-design/icons"


export const CenterLoading = () => {
  return (
    <div className="flex justify-center items-center content-center h-screen">
    <LoadingOutlined style={{ fontSize: 50 }} twoToneColor={"#34e7e7"} />
  </div>
  )
}
