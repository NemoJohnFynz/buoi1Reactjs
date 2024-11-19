import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Group() {
    const [groups, setGroups] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchGroups() {
            try {
                const response = await axios.get('http://localhost:3001/product/allgroup');
                const groupData = response.data;

                const groupWithProductCount = await Promise.all(
                    groupData.map(async (group) => {
                        try {
                            const productCountResponse = await axios.get(`http://localhost:3001/product/getGroupname/${group.idnhom}`);
                            const productCountData = productCountResponse.data[0];
                            return {
                                ...group,
                                productCount: productCountData ? productCountData.productCount : 0,
                            };
                        } catch (error) {
                            console.error(`Error fetching product count for group ${group.idnhom}:`, error);
                            return {
                                ...group,
                                productCount: 0,
                            };
                        }
                    })
                );

                setGroups(groupWithProductCount);
            } catch (error) {
                setError('Failed to fetch groups');
                console.error('Error fetching groups:', error);
            }
        }

        fetchGroups();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Danh mục sản phẩm</h2>
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
                {groups.map((group) => (
                    <div className="col-md-4" key={group.idnhom}>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{group.ten}</h5>
                                <p className="card-text">Số lượng sản phẩm: {group.productCount}</p>
                                <Link to={`/products/group/${group.idnhom}`} className="btn btn-primary">Xem sản phẩm</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export {Group};