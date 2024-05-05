import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import SelectMenu from './SelectMenu.jsx'
import './SearchResults.css'
import JobCard from '../JobCard/JobCard.jsx'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from "react-router-dom";
import MyHeader from '../NavBar/MyHeader.jsx';


function SearchResults() {
      const jobsList = [
        { id: 1, jobTitle: 'Software Engineer', salray: '6000', jobType: 'Full-time', location: 'Cairo', industry: 'IT' },
        { id: 2, jobTitle: 'Web Developer', salray: '5500', jobType: 'Full-time', location: 'Alex', industry: 'Development' },
        { id: 2, jobTitle: 'Android Developer', salray: '10000', jobType: 'part-time', location: 'Alex', industry: 'Development' },
        { id: 2, jobTitle: 'Analyst', salray: '7000', jobType: 'Full-time', location: 'Giza', industry: 'IT' },
        // Add more job objects as needed
    ];


    const [filteredJobs, setFilteredJobs] = useState([]); // assigned to the map function
    const [returnedJobs, setReturedJobs] = useState([]);

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
            console.log("filtered jobs are", filteredJobs)
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ5NjQ2ODgsImlzcyI6ImpvYkNvbm5lY3QifQ.Cy_Ne55XTpigFD4-vdXTx27Y07b-EfSfRc-xvoLsyx4"
            try {
                const url = `http://localhost:5109/jobs/search?title=${query}`; // Replace with your API endpoint
                // const urlWithQueryParams = {url} + "?query" + {searchParams}
                const response = await fetch (url, {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json', // Adjust if your API requires headers
                        'Authorization':`Bearer ${token}`
                    }
                });
                const data = await response.json();
                let jobSample = data[0];
                let date =  new Date(jobSample.postDate);
                console.log(`job date is : ${date}`)

                setFilteredJobs (data);
                setReturedJobs (data);
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

    const isDateInRange = (date, startDate, endDate) => {
        const jobDate = new Date(date);
        console.log(`job date is : ${jobDate}`)
        return jobDate >= startDate && jobDate <= endDate;
    };


    useEffect(() => {
        let filtered = returnedJobs;
        // let filtered = jobsList

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
            filtered = filtered.filter(job => parseInt(job.salray) < 5000);
        } else if (salaryFilter === '5000-8000') {
            filtered = filtered.filter(job => parseInt(job.salray) >= 5000 && parseInt(job.salray) <= 8000);
        } else if (salaryFilter === '>8000') {
            filtered = filtered.filter(job => parseInt(job.salray) > 8000);
        }
    
        // data filter
        if (dateFilter === 'This week') {
            // Filter jobs from this week
            const thisWeekStart = new Date();
            thisWeekStart.setDate(thisWeekStart.getDate() - thisWeekStart.getDay()); // Get the start of the week (Sunday)
            const thisWeekEnd = new Date(thisWeekStart);
            thisWeekEnd.setDate(thisWeekStart.getDate() + 6); // Get the end of the week (Saturday)

            filtered = filtered.filter(job => isDateInRange(job.postDate, thisWeekStart, thisWeekEnd));
        } else if (dateFilter === 'This month') {
            // Filter jobs from this month
            const thisMonthStart = new Date();
            thisMonthStart.setDate(1); // Set to the first day of the month
            const thisMonthEnd = new Date();
            thisMonthEnd.setMonth(thisMonthEnd.getMonth() + 1);
            thisMonthEnd.setDate(0); // Set to the last day of the month

            filtered = filtered.filter(job => isDateInRange(job.postDate, thisMonthStart, thisMonthEnd));
        } else if (dateFilter === '2 months ago') {
            // Filter jobs from 2 months ago
            const twoMonthsAgo = new Date();
            twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

            filtered = filtered.filter(job => isDateInRange(job.postDate, twoMonthsAgo, new Date()));
        }

        // Update the filtered list of jobs
        setFilteredJobs(filtered);

    }, [locationFilter, industryFilter, jobTitleFilter, jobTypeFilter, salaryFilter, dateFilter]);


    return (
        <>
            <MyHeader/>
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
                        <option value="Contract">Contract</option>
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
                    {filteredJobs.length !== 0 ? (
                    <ul className='jobs-list' style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                        {filteredJobs.map((job, index) => (
                            <li style={{ textDecoration: 'none' }} key={index}>
                                <JobCard
                                    title={job.jobTitle}
                                    salary={`${job.salray}`}
                                    type={job.jobType}
                                    jobId={job.jobId} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p style={{ textAlign: 'center' }}>No jobs found.</p>
                    )}
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default SearchResults;
