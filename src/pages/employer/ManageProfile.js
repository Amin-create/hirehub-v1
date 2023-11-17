import React from 'react';
import { Breadcrumb } from '../../components/core';

const breadcrumb = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Create an employer account" },
];

function ManageProfile() {

    return (
        <>
            <Breadcrumb
                breadcrumb={breadcrumb}
            />

            <div class="row">
                <div class="col-xl form-card-wrapper">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Create an Employer Account</h5>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label class="form-label" for="company_name">Your company's
                                        name<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" id="company_name" placeholder="Handmade" />
                                </div>
                                <div class="mb-3">
                                    <label for="number_of_employees" class="form-label">Your company's
                                        number of employees</label>
                                    <select class="form-select" id="number_of_employees" aria-label="Default select example">
                                        <option value="Open this select menu" selected>Open this select menu</option>
                                        <option value="25">25</option>
                                        <option value="200">200</option>
                                        <option value="500">500</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="attachedPhoto" class="form-label">Attach Photo</label>
                                    <input class="form-control" type="file" id="attachedPhoto" />
                                </div>
                                <div class="mb-3">
                                    <label for="attachedVideo" class="form-label">Attach Video</label>
                                    <input class="form-control" type="file" id="attachedVideo" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label m-0" for="phone-no">Your Phone Number</label>
                                    <small class="text-light-gray d-block">We will use this number to text you important
                                        notifications</small>
                                    <input type="text" id="phone-no" class="form-control phone-mask"
                                        placeholder="+34 526 952 689" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="d-flex justify-content-start">
                        <button type="submit" class="btn btn-primary btn-wider">Save And Continue </button>
                    </div>
                </div>
            </div>



            2nd
            2nd
            2nd
            2nd
            2nd
            2nd

            <div class="row">
                <div class="col-xl form-card-wrapper">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Create an Employer Account</h5>
                        </div>
                        <div class="card-body">
                            <form>

                                <div class="mb-3">
                                    <label for="number_of_employees" class="form-label">Your company's name*</label>
                                    <select class="form-select" id="number_of_employees" aria-label="Default select example">
                                        <option selected>Select an option</option>
                                        <option value="option1">option1</option>
                                        <option value="option2">option2</option>
                                        <option value="option3">option3</option>
                                    </select>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label m-0" for="description">Description</label>
                                    <textarea name="description" id="description" class="form-control" rows="5"
                                        placeholder="Decribe here"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="d-flex justify-content-start align-items-center gap-2 py-3">
                        <button type="button" class="btn btn-outline-dark">Back</button>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>



        </>
    );
}

export default ManageProfile;
