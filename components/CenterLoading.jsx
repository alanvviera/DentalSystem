import { LoadingOutlined } from "@ant-design/icons"

/**
 * Component to display a centered loading spinner.
 *
 * @returns {JSX.Element} JSX element representing the centered loading spinner.
 */
export const CenterLoading = () => {
  return (
    <div className="flex justify-center items-center content-center h-screen">
    <LoadingOutlined style={{ fontSize: 50 }} twoToneColor={"#34e7e7"} />
  </div>
  )
}
