import { useState } from "react";

function Car() {
    const [car, setCar] = useState({
        name: "Ferrari 812 GTS",
        color: "black",
        year: "2023"
    });

    const [newYear, setNewYear] = useState(car.year);
    const [newName, setNewName] = useState(car.name); // Thêm state cho tên mới

    // Cập nhật năm
    const updateYear = (event) => {
        const year = event.target.value;
        setNewYear(year); 
    };

    const handleUpdateYear = () => {
        setCar((prevCar) => ({
            ...prevCar,
            year: newYear
        }));
        alert(`Updated Year: ${newYear}`); 
    };

    // Cập nhật tên
    const updateCar = (event) => {
        const name = event.target.value; // Sử dụng biến đúng
        setNewName(name); 
    };

    const handleUpdateCar = () => {
        setCar((prevCar) => ({
            ...prevCar,
            name: newName
        }));
        alert(`Updated Name: ${newName}`); 
    };

    return (
        <>
            <h2>Show information of Car:</h2>
            <p>Name: {car.name}</p>
            <p>Color: {car.color}</p>
            <p>Year: {car.year}</p>
            <label>
                Update Year of Car: 
                <input 
                    type="number" 
                    value={newYear} 
                    onChange={updateYear} 
                /> {/* Nhập năm mới */}
            </label>
            <input 
                type="button" 
                value="Update Year" 
                onClick={handleUpdateYear} 
            /> {/* Nút để cập nhật năm */}
            
            <label>
                Update Name of Car: 
                <input 
                    type="text" 
                    value={newName} 
                    onChange={updateCar} 
                /> {/* Nhập tên mới */}
            </label>
            <input 
                type="button" 
                value="Update Name" 
                onClick={handleUpdateCar} 
            /> {/* Nút để cập nhật tên */}
        </>
    );
}

export { Car }; // Xuất component Car


// I.5. 	Xây dựng Component Car
// •	Tạo file Car.js với nội dung sau:
// function Car(){
//     //đặt state
// 	//đặt hàm set state
// }
// return (
//     <>
// Show information of Car:
// 	Update Year of Car: <input type=”number”/>
// <input type=”button” value=”Update Year”/>
//     </>
//   )
// •	Khởi tạo state và hàm setCar để quản lý các thông tin của Car gồm: name, color, year
// •	Xây dựng thêm code ở return để hiển thị các thông tin của Car đang lưu trong state.      
// •	Xây dựng hàm để cập nhật lại năm của Car, với năm được nhập từ ô nhập liệu
// •	Thực thi component Car trong App.js
