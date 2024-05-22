import React, { useEffect, useState } from 'react'

export default function Bai7() {
    const [month, setMonth] = useState('');
    const [season, setSeason] = useState('');
  
    const months = [
      'Tháng Một',
      'Tháng Hai',
      'Tháng Ba',
      'Tháng Tư',
      'Tháng Năm',
      'Tháng Sáu',
      'Tháng Bảy',
      'Tháng Tám',
      'Tháng Chín',
      'Tháng Mười',
      'Tháng Mười Một',
      'Tháng Mười Hai',
    ];
  
    const seasons = ['Xuân', 'Hạ', 'Thu', 'Đông'];
    useEffect(()=> {
        const currentDate = new Date();
        const monthIndex = currentDate.getMonth();
        setMonth(months[monthIndex]);

        const seasonIndex = Math.floor(monthIndex / 3);
        setSeason(seasons[seasonIndex]);
    }, [months,seasons])
  return (
    <div>
        <h1>Bài 7</h1>
        <h3>Bây giờ là tháng : {month}</h3>
        <h3>Mùa hiện tại: {season}</h3>
    </div>
  )
}
