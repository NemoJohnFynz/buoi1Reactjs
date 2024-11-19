import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductForGroup() {
    const { idnhom } = useParams();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get(`http://localhost:3001/product/productgr/${idnhom}`);
                setProducts(response.data);
                console.log(response.data);
            } catch (error) {
                setError('Failed to fetch products');
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    }, [idnhom]);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Danh sách sản phẩm</h2>
            {error && <p className="text-danger">{error}</p>}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Hình ảnh</th>
                        <th>Mô tả</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.masp}>
                            <td>{product.ten}</td>
                            <td>{product.gia}</td>
                            <td>
                            <img src={`http://localhost:3001${product.hinhanh}`} alt={product.ten} style={{ width: '100px' }} />
                            </td>
                            <td>{product.mota}</td>
                            <td>
                                <button className="btn btn-primary btn-sm">Thêm</button>
                                <button className="btn btn-warning btn-sm mx-2">Sửa</button>
                                <button className="btn btn-danger btn-sm">Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export {ProductForGroup}