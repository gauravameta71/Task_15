"use client";
import React, { useState } from "react";

function StaffDetails() {
  const [employmentStatus, setEmploymentStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
  };

  return (
    <div className="container mx-auto bg-white px-4 py-8">
      <div className="col-span-full mt-4 flex ">
        {/* <button
          type="button"
          className="mt-[6px] h-8 rounded-md bg-blue-500 px-4 text-white hover:bg-blue-600 focus:border-blue-300 focus:outline-none focus:ring"
        >
          Back
        </button> */}
        <p className=" px-4 py-2 text-xl font-bold text-blue-800 ">
          Enroll New Staff
        </p>
      </div>

      <h2 className="mb-8 text-center text-2xl font-bold text-black">
        BRANCH: SHAHEEN JUNIOR COLLEGE
      </h2>

      <div className="border-gray-300 rounded-lg border-4 ">
        <div className="m-4 h-10 w-auto rounded-sm bg-blue-400 p-1 font-bold text-black">
          Staff Details
        </div>
        <form onSubmit={handleSubmit} className="m-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* 1 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="mb-2 block text-sm font-medium text-blue-600"
            >
              Employment Status:
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-200 dark:border-gray-600 block w-full rounded-md border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 "
            >
              <option value="">-Select-</option>
              <option value="temporary">Temporary</option>
              <option value="permanent">Permanent</option>
            </select>
          </div>
          {/* 2 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="mb-2 block text-sm font-medium text-blue-600"
            >
              Staff Type :
            </label>
            <div className="flex flex-row gap-1">
              <div className="flex items-center">
                <div className="col-span-2">
                  <div className="mt-1">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        name="teaching"
                        value="teaching"
                      />
                      <span className="ml-2 text-black">Teaching</span>
                    </label>
                    <label className="ml-2 inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        name="non-teaching"
                        value="non-teaching"
                      />
                      <span className="ml-2 text-black">Non-teaching</span>
                    </label>
                    <label className="ml-2 inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        name="transport"
                        value="transport"
                      />
                      <span className="ml-2 text-black">Transport</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="mb-2 block text-sm font-medium text-blue-600"
            >
              Staff Department:
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-200 dark:border-gray-600 block w-full rounded-md border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 "
            >
              <option value="">-Select Department-</option>
              <option value="temporary">Btech</option>
              <option value="permanent">BBA</option>
              <option value="permanent">Other</option>
            </select>
          </div>
          {/* 4 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="mb-2 block text-sm font-medium text-blue-600"
            >
              Employment Category:
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-200 dark:border-gray-600 block w-full rounded-md border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 "
            >
              <option value="">-Select Category-</option>
              <option value="temporary">Temporary</option>
              <option value="permanent">Permanent</option>
            </select>
          </div>

          {/* 5 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="mb-2 block text-sm font-medium text-blue-600"
            >
              Designation: *
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-200 dark:border-gray-600 block w-full rounded-md border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 "
            >
              <option value="">-Select Department-</option>
              <option value="temporary">Computer Sci.</option>
              <option value="permanent">Mechincal</option>
              <option value="permanent">Business</option>
            </select>
          </div>
          {/* 6 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="mb-2 block text-sm font-medium text-blue-600"
            >
              Qualification Type : *
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-200 dark:border-gray-600 block w-full rounded-md border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 "
            >
              <option value="">-Select Qualification-</option>
              <option value="temporary">Temporary</option>
              <option value="permanent">Permanent</option>
            </select>
          </div>
          {/* 7 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="mb-2 block text-sm font-medium text-blue-600"
            >
              Education Qualification : *
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-200 dark:border-gray-600 block w-full rounded-md border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 "
            >
              <option value="">-Select Qualification-</option>
              <option value="temporary">Temporary</option>
              <option value="permanent">Permanent</option>
            </select>
          </div>
          {/* 8 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="mb-2 block text-sm font-medium text-blue-600"
            >
              Access Level : *
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-200 dark:border-gray-600 block w-full rounded-md border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 "
            >
              <option value="">-Select Access Level-</option>
              <option value="temporary">Temporary</option>
              <option value="permanent">Permanent</option>
            </select>
          </div>
          {/* 9 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="mb-2 block text-sm font-medium text-blue-600"
            >
              Trained As : *
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-200 dark:border-gray-600 block w-full rounded-md border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 "
            >
              <option value="">-Select Level-</option>
              <option value="temporary">Intern</option>
              <option value="permanent">Trainee</option>
            </select>
          </div>
          {/* 10 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="mb-2 block text-sm font-medium text-blue-600"
            >
              CTET Qualified :
            </label>
            <div className="flex flex-row gap-1">
              <div className="flex items-center">
                <div className="col-span-2">
                  <div className="mt-1">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        name="yes"
                        value="yes"
                      />
                      <span className="ml-2 text-black">Yes</span>
                    </label>
                    <label className="ml-6 inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        name="no"
                        value="no"
                      />
                      <span className="ml-2 text-black">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="m-4 mt-8 h-10 w-auto rounded-sm bg-blue-400 p-1 font-bold text-black">
          Personal Details
        </div>

        <div className="container mx-auto p-4">
          <form className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-6">
            {/* Row 1 */}
            <div className="col-span-2">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-blue-600"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="border-gray-300 mt-1 block w-full rounded-md border p-2.5 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="middleName"
                className="block text-sm font-medium text-blue-600"
              >
                Middle Name:
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                className="border-gray-300 mt-1 block w-full rounded-md border p-2.5 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-blue-600"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="border-gray-300 mt-1 block w-full rounded-md border p-2.5 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Row 2 */}
            <div className="col-span-2">
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium text-blue-600"
              >
                Mobile Number:
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                className="border-gray-300 mt-1 block w-full rounded-md border p-2.5 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="emergencyContact"
                className="block text-sm font-medium text-blue-600"
              >
                Emergency Contact Number:
              </label>
              <input
                type="tel"
                id="emergencyContact"
                name="emergencyContact"
                className="border-gray-300 mt-1 block w-full rounded-md border p-2.5 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-blue-600">
                Gender:
              </label>
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="male"
                  />
                  <span className="ml-2 text-black">Male</span>
                </label>
                <label className="ml-6 inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="female"
                  />
                  <span className="ml-2 text-black">Female</span>
                </label>
              </div>
            </div>

            {/* Row 3 */}
            <div className="col-span-2">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-blue-600"
              >
                Date of Birth :
              </label>
              <input
                type="text"
                id="dob"
                name="dob"
                placeholder="dd-mm-yyyy"
                pattern="\d{2}-\d{2}-\d{4}"
                title="Please enter a date in the format dd-mm-yyyy"
                className="border-gray-300 mt-1 block w-full rounded-md border p-2.5 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-600"
              >
                Email Id:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-gray-300 mt-1 block w-full rounded-md border p-2.5 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Row 4 */}
            <div className="col-span-2">
              <label
                htmlFor="permanentAddress"
                className="block text-sm font-medium text-blue-600"
              >
                Permanent Address:
              </label>
              <textarea
                id="permanentAddress"
                name="permanentAddress"
                rows="3"
                className="border-gray-300 mt-1 block w-full rounded-md border p-2.5 focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="correspondingAddress"
                className="block text-sm font-medium text-blue-600"
              >
                Corresponding Address:
              </label>
              <textarea
                id="correspondingAddress"
                name="correspondingAddress"
                rows="3"
                className="border-gray-300 mt-1 block w-full rounded-md border p-2.5 focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="employmentStatus"
                className="mb-2 block text-sm font-medium text-blue-600"
              >
                Religion :
              </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-200 dark:border-gray-600 block w-full rounded-md border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 "
              >
                <option value="">-Select-</option>
                <option value="Hindu">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="Cristian">Cristian</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </form>
        </div>

        <div className="m-4 mt-8 h-10 w-auto rounded-sm bg-blue-400 p-1 font-bold text-black">
          Other Details
        </div>

        <div className="container mx-auto p-4">
          <form className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-6">
            {/* Row 1 */}
            <div className="col-span-2">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-blue-600"
              >
                Adhaar No. : *
              </label>
              <input
                type="text"
                id="adhaar"
                name="adhaar"
                className="border-gray-300 mt-1 block w-full rounded-md border p-2.5 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="middleName"
                className="block text-sm font-medium text-blue-600"
              >
                PAN No.: *
              </label>
              <input
                type="text"
                id="pan"
                name="pan"
                className="border-gray-300 mt-1 block w-full rounded-md border p-2.5 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Row 3 */}
            <div className="col-span-2">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-blue-600"
              >
                Date of Birth :
              </label>
              <input
                type="text"
                id="dob"
                name="dob"
                placeholder="dd-mm-yyyy"
                pattern="\d{2}-\d{2}-\d{4}"
                title="Please enter a date in the format dd-mm-yyyy"
                className="border-gray-300 mt-1 block w-full rounded-md border p-2.5 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-600"
              >
                Staff Reference Code : *
              </label>
              <input
                type="text"
                id="refrenceCode"
                name="refrenceCode"
                className="border-gray-300 mt-1 block w-full rounded-md border p-2.5 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-blue-600">
                Salary Pay Type:
              </label>
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="male"
                  />
                  <span className="ml-1 text-black">Consolidate</span>
                </label>
                <label className="ml-1 inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="female"
                  />
                  <span className="ml-2 text-black">PAY</span>
                </label>
                <label className="ml-1 inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="female"
                  />
                  <span className="ml-2 text-black">other</span>
                </label>
              </div>
            </div>

            {/* Row 4 */}
            <div className="col-span-2">
              <label
                htmlFor="permanentAddress"
                className="block text-sm font-medium text-blue-600"
              >
                Government id/ Resident No : *
              </label>
              <textarea
                id="id"
                name="id"
                rows="3"
                className="border-gray-300 mt-1 block w-full rounded-md border p-2.5 focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="col-span-1">
              <label
                htmlFor="employmentStatus"
                className="mb-2 block text-sm font-medium text-blue-600"
              >
                Citizenship:
              </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-200 dark:border-gray-600 block w-full rounded-md border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 "
              >
                <option value="">-Select-</option>
                <option value="temporary">Indian</option>
                <option value="permanent">Other</option>
              </select>
            </div>
          </form>
        </div>
        <div className="col-span-full m-4">
          <button
            type="submit"
            className="rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600 focus:border-orange-300 focus:outline-none focus:ring"
          >
            Save and Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default StaffDetails;
