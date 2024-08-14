import React from 'react'
import './table.css';

export default function table() {
    return (
        <div className='table'>
            <table class="table-auto w-full border-collapse border border-slate-300 rounded-md  p-4">
                <thead>
                    <tr className='rowH ' >
                        <td class="p-2 font-bold">ID</td>
                        <td class="p-2 font-bold">Name</td>
                        <td class="p-2 font-bold">Price</td>
                        <td class="p-2 font-bold">Price</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className='rowH' >
                        <td class="p-2">1</td>
                        <td class="p-2">Blue T-shirt</td>
                        <td class="p-2">$9</td>
                        <td class="p-2">Price</td>
                    </tr>
                    <tr className='rowH' >
                        <td class="p-2">2</td>
                        <td class="p-2">Pink T-shirt</td>
                        <td class="p-2">$7</td>
                        <td class="p-2">Price</td>
                    </tr>
                    <tr className='rowH'>
                        <td class="p-2">3</td>
                        <td class="p-2">Red T-shirt</td>
                        <td class="p-2">$4</td>
                        <td class="p-2">Price</td>
                    </tr>
                </tbody>
            </table>
            {/* <div class="table w-full table">
                <div class="table-header-group">
                    <div class="table-row rowH">
                        <div class="table-cell text-left ">Date</div>
                        <div class="table-cell text-left ">Job Role</div>
                        <div class="table-cell text-left ">Company</div>
                        <div class="table-cell text-left ">Status</div>
                    </div>
                </div>
                <div class="table-row-group">
                    <div class="table-row rowH">
                        <div class="table-cell ">The Sliding Mr. Bones </div>
                        <div class="table-cell ">Malcolm Lockyer</div>
                        <div class="table-cell ">1961</div>
                        <div class="table-cell text-left ">Status</div>
                    </div>
                    <div class="table-row rowH">
                        <div class="table-cell ">Witchy Woman</div>
                        <div class="table-cell ">The Eagles</div>
                        <div class="table-cell ">1972</div>
                        <div class="table-cell text-left ">Status</div>
                    </div>
                    <div class="table-row rowH">
                        <div class="table-cell">Shining Star</div>
                        <div class="table-cell ">Earth, Wind, and Fire</div>
                        <div class="table-cell">1975 djidashdiuaghagiagk</div>
                        <div class="table-cell text-left ">Status</div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
