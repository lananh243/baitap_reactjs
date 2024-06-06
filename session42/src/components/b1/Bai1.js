"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_bootstrap_1 = require("react-bootstrap");
function Bai1() {
    return (<>
        <h1>Bài 1</h1>
        <react_bootstrap_1.Button variant="primary">Lưu</react_bootstrap_1.Button>{' '}
        <react_bootstrap_1.Button variant="secondary">Hủy</react_bootstrap_1.Button>{' '}
        <react_bootstrap_1.Button variant="success">Thành công</react_bootstrap_1.Button>{' '}
        <react_bootstrap_1.Button variant="warning">Cảnh báo</react_bootstrap_1.Button>{' '}
        <react_bootstrap_1.Button variant="danger">Báo lỗi</react_bootstrap_1.Button>{' '}
        <react_bootstrap_1.Button variant="info">Thông tin</react_bootstrap_1.Button>{' '}
        <react_bootstrap_1.Button variant="link">Đường dẫn</react_bootstrap_1.Button>
    </>);
}
exports.default = Bai1;
