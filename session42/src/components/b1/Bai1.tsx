
import { Button } from 'react-bootstrap'

export default function Bai1() {
  return (
    <>
        <h1>Bài 1</h1>
        <Button variant="primary">Lưu</Button>{' '}
        <Button variant="secondary">Hủy</Button>{' '}
        <Button variant="success">Thành công</Button>{' '}
        <Button variant="warning">Cảnh báo</Button>{' '}
        <Button variant="danger">Báo lỗi</Button>{' '}
        <Button variant="info">Thông tin</Button>{' '}
        <Button variant="link">Đường dẫn</Button>
    </>
  )
}
