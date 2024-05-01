import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Highlight: Added useNavigate
import SelectMenu from './SelectMenu.jsx'
import './SearchResults.css'
import JobCard from '../JobCard/JobCard.jsx'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from "react-router-dom";


function SearchResults() {
    const locationList = ["Cairo", "Alex", "Giza"];
    const jobTitleList = ["Junior", "Senior", "Lead"];
    const jobTypeList = ["Full-time", "Part-time", "Freelance"];
    const industryList = ["IT", "Development", "AI"];
    const dateList = ["This week", "This month", "2 months ago", "3 months ago"];
    const salaryRangeList = [">5,000 LE", "5,000-8,000 LE", "8,000-10,000 LE", "<10,000 LE"];


      const jobsList = [
        { id: 1, jobTitle: 'Software Engineer', salary: '6000', jobType: 'Full-time', location: 'Cairo', industry: 'IT' },
        { id: 2, jobTitle: 'Web Developer', salary: '5500', jobType: 'Full-time', location: 'Alex', industry: 'Development' },
        { id: 2, jobTitle: 'Android Developer', salary: '10000', jobType: 'part-time', location: 'Alex', industry: 'Development' },
        { id: 2, jobTitle: 'Analyst', salary: '7000', jobType: 'Full-time', location: 'Giza', industry: 'IT' },
        // Add more job objects as needed
    ];

    // const [jobs, setJobs] = useState([]);
    // const [filteredJobs, setFilteredJobs] = useState([]);

    const [filteredJobs, setFilteredJobs] = useState([]);
    const [locationFilter, setLocationFilter] = useState('');
    const [industryFilter, setIndustryFilter] = useState('');
    const [jobTitleFilter, setJobTitleFilter] = useState('');
    const [jobTypeFilter, setJobTypeFilter] = useState('');
    const [salaryFilter, setSalaryFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const query = searchParams.get('query');
        console.log('Query parameter:', query);        

    }, [searchParams]);

    useEffect(() =>{

        const fetchData = async () => {
            const query = searchParams.get('query');
            console.log("filterd jobs are", filteredJobs)
            try {
                const url = `http://localhost:5109/jobs/search?title=${query}`; // Replace with your API endpoint
                // const urlWithQueryParams = {url} + "?query" + {searchParams}
                const response = await fetch (url, {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json', // Adjust if your API requires headers
                        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ1ODQ2NDgsImlzcyI6ImpvYkNvbm5lY3QifQ.M_SBjSPNkvFweu82Te8rTd5VHGoW3uOdmnY_dAlxOAA' }
                });
                const data = await response.json();
                console.log('data is ${data}')
                setFilteredJobs (data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            
        };
        fetchData();

    }, []);


    const handleLocationChange = (event) => {
        setLocationFilter(event.target.value);
    };

    const handleIndustryChange = (event) => {
        setIndustryFilter(event.target.value);
    };

    const handleJobTitleChange = (event) => {
        setJobTitleFilter(event.target.value);
    };
    const handleJobTypeChange = (event) => {
        setJobTypeFilter(event.target.value);
    };
    const handleSalaryChange = (event) => {
        setSalaryFilter(event.target.value);
    };
    const handleDateChange = (event) => {
        setDateFilter(event.target.value);
    };


    useEffect(() => {
        let filtered = filteredJobs;

        // location filter
        if (locationFilter !== '') {
            filtered = filtered.filter(job => job.location === locationFilter);
        }

        // industry filter
        if (industryFilter !== '') {
            filtered = filtered.filter(job => job.industry === industryFilter);
        }

        // job title filter
        if (jobTitleFilter !== '') {
            filtered = filtered.filter(job => job.jobTitle === jobTitleFilter);
        }

        // job type filter
        if (jobTypeFilter !== '') {
            filtered = filtered.filter(job => job.jobType === jobTypeFilter);
        }

        // salary filter
        if (salaryFilter === '<5000') {
            filtered = filtered.filter(job => parseInt(job.salary) < 5000);
        } else if (salaryFilter === '5000-8000') {
            filtered = filtered.filter(job => parseInt(job.salary) >= 5000 && parseInt(job.salary) <= 8000);
        } else if (salaryFilter === '>8000') {
            filtered = filtered.filter(job => parseInt(job.salary) > 8000);
        }
    
        // data filter
        if (dateFilter === 'This week') {
            // Filter jobs from this week
            const thisWeekStart = new Date();
            thisWeekStart.setDate(thisWeekStart.getDate() - thisWeekStart.getDay()); // Get the start of the week (Sunday)
            const thisWeekEnd = new Date(thisWeekStart);
            thisWeekEnd.setDate(thisWeekStart.getDate() + 6); // Get the end of the week (Saturday)
            filtered = filtered.filter(job => isDateInRange(job.date, thisWeekStart, thisWeekEnd));
        } else if (dateFilter === 'This month') {
            // Filter jobs from this month
            const thisMonthStart = new Date();
            thisMonthStart.setDate(1); // Set to the first day of the month
            const thisMonthEnd = new Date();
            thisMonthEnd.setMonth(thisMonthEnd.getMonth() + 1);
            thisMonthEnd.setDate(0); // Set to the last day of the month
            filtered = filtered.filter(job => isDateInRange(job.date, thisMonthStart, thisMonthEnd));
        } else if (dateFilter === '2 months ago') {
            // Filter jobs from 2 months ago
            const twoMonthsAgo = new Date();
            twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
            filtered = filtered.filter(job => isDateInRange(job.date, twoMonthsAgo, new Date()));
        }

        // Apply other filters if needed

        // Update the filtered list of jobs
        setFilteredJobs(filtered);
    }, [locationFilter, industryFilter, jobTitleFilter, jobTypeFilter, salaryFilter, dateFilter]);


    return (
        <>
            <div>
                <h2 style={{ marginLeft: '20px' }}>Results</h2>
                <div className="filter-menu">
                <h5>Filter your results: </h5>

                    <select className='select' value={locationFilter} onChange={handleLocationChange}>
                        <option value="">Select Location</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Giza">Giza</option>
                        <option value="Alex">Alex</option>
                        
                    </select>
                    <select className='select' value={industryFilter} onChange={handleIndustryChange}>
                        <option value="">Select industry</option>
                        <option value="IT">IT</option>
                        <option value="Development">Development</option>
                        
                    </select>
                    <select className='select' value={jobTitleFilter} onChange={handleJobTitleChange}>
                        <option value="">Select job title</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                        <option value="Lead">Lead</option>
                    </select>
                    <select className='select' value={jobTypeFilter} onChange={handleJobTypeChange}>
                        <option value="">Select job type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Remote">Remote</option>
                    </select>
                    <select className='select' value={salaryFilter} onChange={handleSalaryChange}>
                        <option value="">Select salary</option>
                        <option value="<5000">less than 5,000 LE</option>
                        <option value="5000-8000">between 5,000 and 8,000</option>
                        <option value=">8000">more than 8,000</option>
                    </select>
                    <select className='select' value={dateFilter} onChange={handleDateChange}>
                        <option value="">Select date</option>
                        <option value="This week">This week</option>
                        <option value="This month">This month</option>
                        <option value="2 months ago">2 months ago</option>
                    </select>
                </div>
                <div>
                    <ul className='jobs-list' style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                        {filteredJobs.map((job, index) => (
                            <li style={{ textDecoration: 'none' }} key={index}>
                                <JobCard
                                    title={job.jobTitle}
                                    salary={job.salary.toString()}
                                    type={job.jobType}
                                    jobId={job.id} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default SearchResults;
