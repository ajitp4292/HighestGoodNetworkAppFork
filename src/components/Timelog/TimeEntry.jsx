import React, { useState } from 'react'
import {
    Card,
    Row,
    Col,
} from 'reactstrap'
import { useSelector } from 'react-redux'
import ReactHtmlParser from 'react-html-parser';
import moment from "moment";

import "./Timelog.css";
import TimeEntryForm from './TimeEntryForm';
import DeleteModal from './DeleteModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'

const TimeEntry = ({data, displayYear}) => {
    const [ modalOpen, setModalOpen ] = useState(false);
    const toggle = () => setModalOpen(modalOpen => !modalOpen);

    const dateOfWork = moment(data.dateOfWork);
    const { user } = useSelector(state => state.auth);
    const isOwner = data.personId === user.userid;
    const isSameDay = moment().isSame(data.dateOfWork, 'day');
    const isAdmin = user.role === "Administrator";

    return (
        <Card className="mb-1 p-2">
            <Row className="mx-0">
                <Col md={3} className="date-block px-0">
                    <div className="date-div">
                    <div>
                        <h4>
                            {dateOfWork.format('MMM D')}
                        </h4>
                        {displayYear &&                  
                            <h5>
                                {dateOfWork.format('YYYY')}
                            </h5>
                        }
                        <h5 className="text-info">
                            {dateOfWork.format('dddd')}
                        </h5>
                    </div>
                    </div>
                </Col>
                <Col md={4} className="px-0">
                    <h4 className="text-success">
                        {data.hours}h {data.minutes}m
                    </h4>
                    <div className="text-muted">
                        Project:
                    </div> 
                    <h6> {data.projectName} </h6>
                    <span className="text-muted">Tangible: </span> {' '}                                
                    <input type="checkbox" name="isTangible" checked={data.isTangible} readOnly/>
                </Col>
                <Col md={5} className="pl-2 pr-0">
                    <div className="text-muted">
                        Notes:
                    </div>
                    {ReactHtmlParser(data.notes)}
                    <div className="buttons">
                        {( isAdmin || (!data.isTangible && isOwner && isSameDay) ) && 
                            <span> 
                                <FontAwesomeIcon icon={faEdit} size="lg" className="mr-3 text-primary" onClick={ toggle }/>
                                <TimeEntryForm edit={true} userId={data.personId} data={data} toggle={toggle} isOpen={modalOpen}/>
                            </span>
                        }
                        {( isAdmin || (!data.isTangible && isOwner && isSameDay) ) && 
                            <DeleteModal timeEntry={data}/>
                        }
                    </div>
                </Col>
            </Row>
        </Card>
    );
}

export default TimeEntry