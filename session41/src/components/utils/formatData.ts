export const formatDate = (date: string) => {
    // Lấy ra chuỗi time dựa vào time hiện tại
    const today = new Date(date);
    // Lấy ra ngày
    let day = today.getDate();
    // lấy ra tháng
    let month = today.getMonth() + 1;
    // lấy ra năm
    let year = today.getFullYear();

    return `${year}-${month}-${day}`
}