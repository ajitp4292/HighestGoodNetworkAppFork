/* eslint-disable arrow-parens */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable no-tabs */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import {
  Row,
  Input,
  Col,
  Container,
  TabContent,
  TabPane,
  List,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import Select from 'react-select';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import moment from 'moment';
import Alert from 'reactstrap/lib/Alert';
import axios from 'axios';
import parse from 'html-react-parser';
import hasPermission from '../../utils/permissions';
import ActiveCell from '../UserManagement/ActiveCell';
import { ENDPOINTS } from '../../utils/URL';
// import { ENDPOINTS } from 'utils/URL';
import Loading from '../common/Loading';
import UserProfileModal from './UserProfileModal';
import './UserProfile.scss';
import TeamsTab from './TeamsAndProjects/TeamsTab';
import ProjectsTab from './TeamsAndProjects/ProjectsTab';
import InfoModal from './InfoModal';
import BasicInformationTab from './BasicInformationTab/BasicInformationTab';
import VolunteeringTimeTab from './VolunteeringTimeTab/VolunteeringTimeTab';
import SaveButton from './UserProfileEdit/SaveButton';
import UserLinkLayout from './UserLinkLayout';
import TabToolTips from './ToolTips/TabToolTips';
import BasicToolTips from './ToolTips/BasicTabTips';
import ResetPasswordButton from '../UserManagement/ResetPasswordButton';
import Badges from './Badges';
import TimeEntryEditHistory from './TimeEntryEditHistory';
import ActiveInactiveConfirmationPopup from '../UserManagement/ActiveInactiveConfirmationPopup';
import { updateUserStatus } from '../../actions/userManagement';
import { UserStatus } from '../../utils/enums';
import { faSleigh, faCamera } from '@fortawesome/free-solid-svg-icons';
import BlueSquareLayout from './BlueSquareLayout';

function UserProfile(props) {
  /* Constant values */
  const initialFormValid = {
    firstName: true,
    lastName: true,
    email: true,
  };
  // const { roles } = props?.userProjects;
  // const roles = props?.userProjects;
  const roles = props?.role.roles;

  /* Hooks */
  const [showLoading, setShowLoading] = useState(true);
  const [showSelect, setShowSelect] = useState(false);
  const [summaries, setSummaries] = useState(undefined);
  const [userProfile, setUserProfile] = useState(undefined);
  const [originalUserProfile, setOriginalUserProfile] = useState(undefined);
  const [activeTab, setActiveTab] = useState('1');
  const [infoModal, setInfoModal] = useState(false);
  const [formValid, setFormValid] = useState(initialFormValid);
  const [changed, setChanged] = useState(false);
  const [blueSquareChanged, setBlueSquareChanged] = useState(false);
  const [type, setType] = useState('');
  const [menuModalTabletScreen, setMenuModalTabletScreen] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [activeInactivePopupOpen, setActiveInactivePopupOpen] = useState(false);
  const [tasks, setTasks] = useState();
  const [updatedTasks, setUpdatedTasks] = useState([]);
  const [summarySelected, setSummarySelected] = useState(null);
  const [summaryName, setSummaryName] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  // const [isValid, setIsValid] = useState(true)

  const loadUserTasks = async () => {
    const userId = props?.match?.params?.userId;
    axios
      .get(ENDPOINTS.TASKS_BY_USERID(userId))
      .then(res => {
        setTasks(res?.data || []);
        setOriginalTasks(res.data);
      })
      .catch(err => console.log(err));
  };

  const loadUserProfile = async () => {
    const userId = props?.match?.params?.userId;
    if (!userId) return;

    try {
      const response = await axios.get(ENDPOINTS.USER_PROFILE(userId));
      const newUserProfile = response.data;
      setUserProfile(newUserProfile);
      setOriginalUserProfile(newUserProfile);
      setShowLoading(false);
    } catch (err) {
      setShowLoading(false);
    }
  };

  const getWeeklySummary = async userId => {
    try {
      setSummarySelected('');
      setShowSummary(false);
      const response = await axios.get(ENDPOINTS.USER_PROFILE(userId));
      const user = response.data;
      const summaries = user.weeklySummaries;
      console.log('summaryName:', summaryName);
      console.log('summaries:', summaries);
      if (summaries && Array.isArray(summaries) && summaries.length >= 3) {
        setSummarySelected([summaries[0].summary, summaries[1].summary, summaries[2].summary]);
        setShowSummary(true);
      } else if (summaries && Array.isArray(summaries) && summaries.length === 2) {
        setSummarySelected([summaries[0].summary, summaries[1].summary, '']);
        setShowSummary(true);
      } else if (summaries && Array.isArray(summaries) && summaries.length === 1) {
        setSummarySelected([summaries[0].summary, '', '']);
        setShowSummary(true);
      } else {
        setSummarySelected(['', '', '']);
        setShowSummary(true);
      }
    } catch (err) {
      setShowLoading(false);
    }
  };

  const getTeamMembersWeeklySummary = async () => {
    const userId = props?.match?.params?.userId;

    if (!userId) return;

    try {
      const response = await axios.get(ENDPOINTS.LEADER_BOARD(userId));
      const leaderBoardData = response.data;
      const allSummaries = [];

      for (let i = 0; i < leaderBoardData.length; i++) {
        // const toAppend = await getWeeklySummary(leaderBoardData[i].personId);
        // const options = [
        //   { value: 'chocolate', label: 'Chocolate' },
        //   { value: 'strawberry', label: 'Strawberry' },
        //   { value: 'vanilla', label: 'Vanilla' },
        // ];
        allSummaries.push({
          value: [leaderBoardData[i].name, leaderBoardData[i].personId],
          label: `View ${leaderBoardData[i].name}'s summary.`,
        });
      }
      console.log('allSummaries:', allSummaries);
      setSummaries(allSummaries);
      return;
    } catch (err) {
      console.log('Could not load leaderBoard data.', err);
    }
  };

  const onDeleteTeam = deletedTeamId => {
    const newUserProfile = { ...userProfile };
    const filteredTeam = newUserProfile.teams.filter(team => team._id !== deletedTeamId);
    newUserProfile.teams = filteredTeam;

    setUserProfile(newUserProfile);
    setChanged(true);
  };

  const onDeleteProject = deletedProjectId => {
    const newUserProfile = { ...userProfile };
    const filteredProject = newUserProfile.projects.filter(
      project => project._id !== deletedProjectId,
    );
    newUserProfile.projects = filteredProject;

    setUserProfile(newUserProfile);
    setChanged(true);
  };

  const onAssignTeam = assignedTeam => {
    const newUserProfile = { ...userProfile };
    if (newUserProfile.teams) {
      newUserProfile.teams.push(assignedTeam);
    } else {
      newUserProfile.teams = [assignedTeam];
    }

    setChanged(true);
    setUserProfile(newUserProfile);
  };

  const onAssignProject = assignedProject => {
    const newUserProfile = { ...userProfile };
    if (newUserProfile.projects) {
      newUserProfile.projects.push(assignedProject);
    } else {
      newUserProfile.projects = [assignedProject];
    }
    setUserProfile(newUserProfile);
    setChanged(true);
  };

  const onUpdateTask = (taskId, updatedTask) => {
    const newTask = {
      updatedTask,
      taskId,
    };

    setTasks(tasks => {
      console.log(tasks);
      const tasksWithoutTheUpdated = [...tasks];
      const taskIndex = tasks.findIndex(task => task._id === taskId);
      tasksWithoutTheUpdated[taskIndex] = updatedTask;
      return tasksWithoutTheUpdated;
    });
    setUpdatedTasks(tasks => [...tasks, newTask]);
    setChanged(true);
  };

  const handleImageUpload = async evt => {
    if (evt) evt.preventDefault();
    const file = evt.target.files[0];
    if (typeof file !== 'undefined') {
      const filesizeKB = file.size / 1024;
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      const allowedTypesString = `File type not permitted. Allowed types are ${allowedTypes
        .toString()
        .replaceAll(',', ', ')}`;

      // Input validation: file type
      if (!allowedTypes.includes(file.type)) {
        setType('image');
        // setIsValid(false)
        setShowModal(true);
        setModalTitle('Profile Pic Error');
        setModalMessage(allowedTypesString);
        return;
      }

      // Input validation: file size.
      if (filesizeKB > 50) {
        const errorMessage = `The file you are trying to upload exceeds the maximum size of 50KB. You can either
														choose a different file, or use an online file compressor.`;

        setType('image');
        // setIsValid(false)
        setShowModal(true);
        setModalTitle('Profile Pic Error');
        setModalMessage(errorMessage);

        return;
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setChanged(true);
        setUserProfile({ ...userProfile, profilePic: fileReader.result });
      };
    }
  };

  const handleBlueSquare = (status = true, type = 'message', blueSquareID = '') => {
    setType(type);
    setShowModal(status);

    if (type === 'addBlueSquare') {
      setModalTitle('Blue Square');
    } else if (type === 'viewBlueSquare' || type === 'modBlueSquare') {
      setModalTitle('Blue Square');
      setId(blueSquareID);
    } else if (blueSquareID === 'none') {
      setModalTitle('Save & Refresh');
      setModalMessage('');
    }
  };

  /**
   * Modifies the userProfile's infringements using a predefined operation
   * @param {String} id Id of the blue square
   * @param {String} dateStamp
   * @param {String} summary
   * @param {String} operation 'add' | 'update' | 'delete'
   */
  const modifyBlueSquares = (id, dateStamp, summary, operation) => {
    if (operation === 'add') {
      const newBlueSquare = { date: dateStamp, description: summary };
      setShowModal(false);
      setUserProfile({
        ...userProfile,
        infringements: userProfile.infringements?.concat(newBlueSquare),
      });
      setModalTitle('Blue Square');
    } else if (operation === 'update') {
      const currentBlueSquares = [...userProfile?.infringements] || [];
      if (dateStamp != null && currentBlueSquares !== []) {
        currentBlueSquares.find(blueSquare => blueSquare._id === id).date = dateStamp;
      }
      if (summary != null && currentBlueSquares !== []) {
        currentBlueSquares.find(blueSquare => blueSquare._id === id).description = summary;
      }

      setShowModal(false);
      setUserProfile({ ...userProfile, infringements: currentBlueSquares });
    } else if (operation === 'delete') {
      let newInfringements = [...userProfile?.infringements] || [];
      if (newInfringements !== []) {
        newInfringements = newInfringements.filter(infringement => infringement._id !== id);
        setUserProfile({ ...userProfile, infringements: newInfringements });
        setShowModal(false);
      }
    }
    setBlueSquareChanged(true);
  };

  const handleSubmit = async () => {
    for (let i = 0; i < updatedTasks.length; i += 1) {
      const updatedTask = updatedTasks[i];
      const url = ENDPOINTS.TASK_UPDATE(updatedTask.taskId);
      axios.put(url, updatedTask.updatedTask).catch(err => console.log(err));
    }
    try {
      await props.updateUserProfile(props.match.params.userId, userProfile);

      if (userProfile._id === props.auth.user.userid && props.auth.user.role !== userProfile.role) {
        await props.refreshToken(userProfile._id);
      }
      await loadUserProfile();
      await loadUserTasks();
    } catch (err) {
      alert('An error occurred while attempting to save this profile.');
    }
    setShouldRefresh(true);
    setChanged(false);
    window.location.reload();
  };

  const toggle = modalName => setMenuModalTabletScreen(modalName);

  const toggleInfoModal = () => {
    setInfoModal(!infoModal);
  };

  const toggleTab = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const updateLink = (personalLinksUpdate, adminLinksUpdate) => {
    setShowModal(false);
    setUserProfile({
      ...userProfile,
      personalLinks: personalLinksUpdate,
      adminLinks: adminLinksUpdate,
    });
  };

  const setActiveInactive = isActive => {
    setActiveInactivePopupOpen(false);
    setUserProfile({
      ...userProfile,
      isActive: !userProfile.isActive,
      endDate: userProfile.isActive ? moment(new Date()).format('YYYY-MM-DD') : undefined,
    });
    updateUserStatus(userProfile, isActive ? UserStatus.Active : UserStatus.InActive, undefined);
  };

  const activeInactivePopupClose = () => {
    setActiveInactivePopupOpen(false);
  };

  /* useEffect functions */
  useEffect(() => {
    getTeamMembersWeeklySummary();
    loadUserProfile();
  }, []);

  useEffect(() => {
    if (!shouldRefresh) return;
    setShouldRefresh(false);
    loadUserProfile();
  }, [shouldRefresh]);

  useEffect(() => {
    setShowLoading(true);
    loadUserProfile();
    setChanged(false);
  }, [props?.match?.params?.userId]);

  useEffect(() => {
    if (!blueSquareChanged) return;
    setBlueSquareChanged(false);
    handleSubmit();
  }, [blueSquareChanged]);

  /**
   *
   * UserProfile.jsx and its subsomponents are being refactored to avoid the
   * use of this monolithic function.
   * Please pass userProfile, setUserProfile, and setChanged as props to subcomponents and
   * modify state that way.
   * This function is being kept here until the refactoring is complete.
   */
  const handleUserProfile = event => {
    setChanged(true);

    switch (event.target.id) {
      case 'emailPubliclyAccessible':
        setUserProfile({
          ...userProfile,
          privacySettings: {
            ...userProfile.privacySettings,
            email: !userProfile.privacySettings?.email,
          },
        });
        break;
      case 'phonePubliclyAccessible':
        setUserProfile({
          ...userProfile,
          privacySettings: {
            ...userProfile.privacySettings,
            phoneNumber: !userProfile.privacySettings?.phoneNumber,
          },
        });
        break;
      case 'blueSquaresPubliclyAccessible':
        setUserProfile({
          ...userProfile,
          privacySettings: {
            ...userProfile.privacySettings,
            blueSquares: !userProfile.privacySettings?.blueSquares,
          },
        });
        break;
      default:
        break;
    }
  };

  if ((showLoading && !props.isAddNewUser) || userProfile === undefined) {
    return (
      <Container fluid>
        <Row className="text-center" data-test="loading">
          <Loading />
        </Row>
      </Container>
    );
  }

  const { firstName, lastName, profilePic, jobTitle = '' } = userProfile;

  const { userId: targetUserId } = props.match ? props.match.params : { userId: undefined };
  const { userid: requestorId, role: requestorRole } = props.auth.user;
  const userPermissions = props.auth.user?.permissions?.frontPermissions;

  const isUserSelf = targetUserId === requestorId;
  // const isUserAdmin = requestorRole === 'Administrator';
  // const canEdit = hasPermission(requestorRole, 'editUserProfile') || isUserSelf;
  let canEdit;
  if (userProfile.role !== 'Owner') {
    canEdit = hasPermission(requestorRole, 'editUserProfile', roles, userPermissions) || isUserSelf;
  } else {
    canEdit =
      hasPermission(requestorRole, 'addDeleteEditOwners', roles, userPermissions) || isUserSelf;
  }

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? '2px solid #333' : '2px solid #ccc',
      boxShadow: 'none',
      '&:hover': {
        border: state.isFocused ? '2px solid #333' : '2px solid #ccc',
      },
    }),
    dropdownIndicator: base => ({
      ...base,
      color: '#333',
    }),
    menu: base => ({
      ...base,
      zIndex: 9999,
    }),
  };

  return (
    <div>
      <ActiveInactiveConfirmationPopup
        isActive={userProfile.isActive}
        fullName={`${userProfile.firstName} ${userProfile.lastName}`}
        open={activeInactivePopupOpen}
        setActiveInactive={setActiveInactive}
        onClose={activeInactivePopupClose}
      />
      {showModal && (
        <UserProfileModal
          isOpen={showModal}
          closeModal={() => setShowModal(false)}
          modalMessage={modalMessage}
          modalTitle={modalTitle}
          type={type}
          updateLink={updateLink}
          modifyBlueSquares={modifyBlueSquares}
          userProfile={userProfile}
          id={id}
          handleLinkModel={props.handleLinkModel}
          role={requestorRole}
          userPermissions={userPermissions}
          // setIsValid={setIsValid(true)}
        />
      )}
      <TabToolTips />
      <BasicToolTips />
      <InfoModal isOpen={infoModal} toggle={toggleInfoModal} />
      <Container className="emp-profile">
        <Row>
          <Col md="4" id="profileContainer">
            <div className="profile-img">
              <Image
                src={profilePic || '/pfp-default.png'}
                alt="Profile Picture"
                roundedCircle
                className="profilePicture"
              />
              {canEdit ? (
                <div className="image-button file btn btn-lg btn-primary">
                  Change Photo
                  <Input
                    style={{ width: '100%', height: '100%', zIndex: '2' }}
                    type="file"
                    name="newProfilePic"
                    id="newProfilePic"
                    // onChange={this.handleImageUpload}
                    onChange={handleImageUpload}
                    accept="image/png,image/jpeg, image/jpg"
                  />
                </div>
              ) : null}
            </div>
          </Col>
          <Col md="8">
            <div className="profile-head">
              {changed && (
                <Alert color="warning">
                  Please click on "Save changes" to save the changes you have made.{' '}
                </Alert>
              )}
              <div className="row">
                <h5 className="column">{`${firstName} ${lastName}`}</h5>
              </div>
              <i
                data-toggle="tooltip"
                data-placement="right"
                title="Click for more information"
                style={{ fontSize: 24, cursor: 'pointer' }}
                aria-hidden="true"
                className="fa fa-info-circle"
                onClick={toggleInfoModal}
              />{' '}
              {canEdit && (
                <>
                  <ActiveCell
                    isActive={userProfile.isActive}
                    user={userProfile}
                    onClick={() => {
                      setActiveInactivePopupOpen(true);
                    }}
                  />
                  &nbsp;
                </>
              )}
              {canEdit && (
                <i
                  data-toggle="tooltip"
                  className="fa fa-clock-o"
                  aria-hidden="true"
                  style={{ fontSize: 24, cursor: 'pointer' }}
                  title="Click to see user's timelog"
                  onClick={() => props.history.push(`/timelog/${targetUserId}`)}
                />
              )}
              <Button
                onClick={() => {
                  setShowSelect(!showSelect);
                  setSummarySelected(null);
                  setSummaryName(null);
                }}
                color="primary"
                size="sm"
              >
                Team Weekly Summaries
              </Button>
              <h6>{jobTitle}</h6>
              <p className="proile-rating">
                From : <span>{moment(userProfile.createdDate).format('YYYY-MM-DD')}</span>
                {'   '}
                To:{' '}
                <span>
                  {userProfile.endDate ? userProfile.endDate.toLocaleString().split('T')[0] : 'N/A'}
                </span>
              </p>
            </div>
            {showSelect && summaries === undefined ? <div>Loading</div> : <div />}
            {showSelect && summaries !== undefined ? (
              <div>
                <Select
                  options={summaries}
                  styles={customStyles}
                  onChange={e => {
                    setSummaryName(e.value[0]);
                    getWeeklySummary(e.value[1]);
                  }}
                />
              </div>
            ) : (
              <div />
            )}
            {summarySelected && showSelect && showSummary ? (
              <div>
                {summarySelected[0] !== '' ? (
                  <div>
                    <h5>{'Viewing ' + summaryName + "'s summary."}</h5>
                    {parse(summarySelected[0])}
                  </div>
                ) : (
                  <h5>{summaryName} did not submit a submit a summary for this week.</h5>
                )}

                {summarySelected[1] !== '' ? (
                  <div>
                    <h5>{'Viewing ' + summaryName + "'s last week's summary."}</h5>
                    {parse(summarySelected[1])}
                  </div>
                ) : (
                  <h5>{summaryName} did not submit a submit a summary for last week.</h5>
                )}

                {summarySelected[2] !== '' ? (
                  <div>
                    <h5>{'Viewing ' + summaryName + ' summary from two weeks ago.'}</h5>
                    {parse(summarySelected[2])}
                  </div>
                ) : (
                  <h5>{summaryName} did not submit a submit a summary two weeks ago.</h5>
                )}
              </div>
            ) : (
              <div />
            )}
            <Badges
              userProfile={userProfile}
              setUserProfile={setUserProfile}
              role={requestorRole}
              canEdit={canEdit}
              handleSubmit={handleSubmit}
              userPermissions={userPermissions}
            />
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <div className="profile-work">
              <UserLinkLayout
                isUserSelf={isUserSelf}
                userProfile={userProfile}
                setChanged={setChanged}
                updateLink={updateLink}
                handleLinkModel={props.handleLinkModel}
                role={requestorRole}
                userPermissions={userPermissions}
                canEdit={canEdit}
              />
              <BlueSquareLayout
                userProfile={userProfile}
                handleUserProfile={handleUserProfile}
                handleSaveError={props.handleSaveError}
                handleBlueSquare={handleBlueSquare}
                isUserSelf={isUserSelf}
                role={requestorRole}
                canEdit={canEdit}
                roles={roles}
                userPermissions={userPermissions}
              />
            </div>
          </Col>
          <Col md="8" className="profile-functions-desktop">
            <div className="profile-tabs">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '1' }, 'nav-link')}
                    onClick={() => toggleTab('1')}
                    id="nabLink-basic"
                  >
                    Basic Information
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '2' }, 'nav-link')}
                    onClick={() => toggleTab('2')}
                    id="nabLink-time"
                  >
                    Volunteering Times
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '3' }, 'nav-link')}
                    onClick={() => toggleTab('3')}
                    id="nabLink-teams"
                  >
                    Teams
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '4' }, 'nav-link')}
                    onClick={() => toggleTab('4')}
                    id="nabLink-projects"
                  >
                    Projects
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '5' }, 'nav-link')}
                    onClick={e => {
                      e.preventDefault();
                      toggleTab('5');
                    }}
                    data-testid="edit-history-tab"
                  >
                    Edit History
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <TabContent
              activeTab={activeTab}
              className="tab-content profile-tab"
              id="myTabContent"
              style={{ border: 0 }}
            >
              <TabPane tabId="1">
                <BasicInformationTab
                  role={requestorRole}
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                  setChanged={setChanged}
                  handleUserProfile={handleUserProfile}
                  formValid={formValid}
                  setFormValid={setFormValid}
                  isUserSelf={isUserSelf}
                  setShouldRefresh={setShouldRefresh}
                  canEdit={canEdit}
                  roles={roles}
                  userPermissions={userPermissions}
                />
              </TabPane>
              <TabPane tabId="2">
                <VolunteeringTimeTab
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                  setChanged={setChanged}
                  isUserSelf={isUserSelf}
                  role={requestorRole}
                  canEdit={hasPermission(requestorRole, 'editUserProfile', roles, userPermissions)}
                />
              </TabPane>
              <TabPane tabId="3">
                <TeamsTab
                  userTeams={userProfile?.teams || []}
                  teamsData={props?.allTeams?.allTeamsData || []}
                  onAssignTeam={onAssignTeam}
                  onDeleteteam={onDeleteTeam}
                  edit={hasPermission(requestorRole, 'editUserProfile', roles, userPermissions)}
                  role={requestorRole}
                  roles={roles}
                />
              </TabPane>
              <TabPane tabId="4">
                <ProjectsTab
                  userProjects={userProfile.projects || []}
                  userTasks={tasks}
                  projectsData={props?.allProjects?.projects || []}
                  onAssignProject={onAssignProject}
                  onDeleteProject={onDeleteProject}
                  edit={hasPermission(requestorRole, 'editUserProfile', roles, userPermissions)}
                  role={requestorRole}
                  userPermissions={userPermissions}
                  userId={props.match.params.userId}
                  updateTask={onUpdateTask}
                />
              </TabPane>
              <TabPane tabId="5">
                <TimeEntryEditHistory
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                  setChanged={setChanged}
                  role={requestorRole}
                  roles={roles}
                  userPermissions={userPermissions}
                />
              </TabPane>
            </TabContent>
          </Col>
          <Col md="8" className="profile-functions-tablet">
            <List className="profile-functions-list">
              <Button
                className="list-button"
                onClick={() => toggle('Basic Information')}
                color="primary"
              >
                Basic Information
              </Button>
              <Modal isOpen={menuModalTabletScreen === 'Basic Information'} toggle={toggle}>
                <ModalHeader toggle={toggle}>Basic Information</ModalHeader>
                <ModalBody>
                  <BasicInformationTab
                    role={requestorRole}
                    userProfile={userProfile}
                    setUserProfile={setUserProfile}
                    setChanged={setChanged}
                    handleUserProfile={handleUserProfile}
                    formValid={formValid}
                    setFormValid={setFormValid}
                    isUserSelf={isUserSelf}
                    setShouldRefresh={setShouldRefresh}
                    canEdit={canEdit}
                    roles={roles}
                    userPermissions={userPermissions}
                  />
                </ModalBody>
                <ModalFooter>
                  <Row>
                    <div className="profileEditButtonContainer">
                      {hasPermission(
                        requestorRole,
                        'resetPasswordOthers',
                        roles,
                        userPermissions,
                      ) &&
                        canEdit &&
                        !isUserSelf && (
                          <ResetPasswordButton className="mr-1 btn-bottom" user={userProfile} />
                        )}
                      {isUserSelf &&
                        (activeTab == '1' ||
                          hasPermission(
                            requestorRole,
                            'editUserProfile',
                            roles,
                            userPermissions,
                          )) && (
                          <Link to={`/updatepassword/${userProfile._id}`}>
                            <Button className="mr-1 btn-bottom" color="primary">
                              {' '}
                              Update Password
                            </Button>
                          </Link>
                        )}
                      {canEdit &&
                        (activeTab == '1' ||
                          hasPermission(
                            requestorRole,
                            'editUserProfile',
                            roles,
                            userPermissions,
                          )) && (
                          <>
                            <SaveButton
                              className="mr-1 btn-bottom"
                              handleSubmit={handleSubmit}
                              disabled={
                                !formValid.firstName ||
                                !formValid.lastName ||
                                !formValid.email ||
                                !changed
                              }
                              userProfile={userProfile}
                            />
                            <span
                              onClick={() => {
                                setUserProfile(originalUserProfile);
                                setTasks(originalTasks);
                                setChanged(false);
                              }}
                              className="btn btn-outline-danger mr-1 btn-bottom"
                            >
                              X
                            </span>
                          </>
                        )}
                      <Button outline onClick={() => loadUserProfile()}>
                        <i className="fa fa-refresh" aria-hidden="true"></i>
                      </Button>
                    </div>
                  </Row>
                </ModalFooter>
              </Modal>
              <Button
                className="list-button"
                onClick={() => toggle('Volunteering Times')}
                color="secondary"
              >
                Volunteering Times
              </Button>
              <Modal isOpen={menuModalTabletScreen === 'Volunteering Times'} toggle={toggle}>
                <ModalHeader toggle={toggle}>Volunteering Times</ModalHeader>
                <ModalBody>
                  <VolunteeringTimeTab
                    userProfile={userProfile}
                    setUserProfile={setUserProfile}
                    setChanged={setChanged}
                    isUserSelf={isUserSelf}
                    role={requestorRole}
                    canEdit={hasPermission(
                      requestorRole,
                      'editUserProfile',
                      roles,
                      userPermissions,
                    )}
                  />
                </ModalBody>
                <ModalFooter>
                  <Row>
                    <div className="profileEditButtonContainer">
                      {canEdit &&
                        (activeTab == '1' ||
                          hasPermission(
                            requestorRole,
                            'editUserProfile',
                            roles,
                            userPermissions,
                          )) && (
                          <>
                            <SaveButton
                              className="mr-1 btn-bottom"
                              handleSubmit={handleSubmit}
                              disabled={
                                !formValid.firstName ||
                                !formValid.lastName ||
                                !formValid.email ||
                                !changed
                              }
                              userProfile={userProfile}
                            />
                            <span
                              onClick={() => {
                                setUserProfile(originalUserProfile);
                                setTasks(originalTasks);
                                setChanged(false);
                              }}
                              className="btn btn-outline-danger mr-1 btn-bottom"
                            >
                              X
                            </span>
                          </>
                        )}
                      <Button outline onClick={() => loadUserProfile()}>
                        <i className="fa fa-refresh" aria-hidden="true"></i>
                      </Button>
                    </div>
                  </Row>
                </ModalFooter>
              </Modal>
              <Button className="list-button" onClick={() => toggle('Teams')} color="secondary">
                Teams
              </Button>
              <Modal isOpen={menuModalTabletScreen === 'Teams'} toggle={toggle}>
                <ModalHeader toggle={toggle}>Teams</ModalHeader>
                <ModalBody>
                  <TeamsTab
                    userTeams={userProfile?.teams || []}
                    teamsData={props?.allTeams?.allTeamsData || []}
                    onAssignTeam={onAssignTeam}
                    onDeleteteam={onDeleteTeam}
                    edit={hasPermission(requestorRole, 'editUserProfile', roles, userPermissions)}
                    role={requestorRole}
                    roles={roles}
                  />
                </ModalBody>
                <ModalFooter>
                  <Row>
                    <div className="profileEditButtonContainer">
                      {canEdit &&
                        (activeTab == '1' ||
                          hasPermission(
                            requestorRole,
                            'editUserProfile',
                            roles,
                            userPermissions,
                          )) && (
                          <>
                            <SaveButton
                              className="mr-1 btn-bottom"
                              handleSubmit={handleSubmit}
                              disabled={
                                !formValid.firstName ||
                                !formValid.lastName ||
                                !formValid.email ||
                                !changed
                              }
                              userProfile={userProfile}
                            />
                            <span
                              onClick={() => {
                                setUserProfile(originalUserProfile);
                                setTasks(originalTasks);
                                setChanged(false);
                              }}
                              className="btn btn-outline-danger mr-1 btn-bottom"
                            >
                              X
                            </span>
                          </>
                        )}
                      <Button outline onClick={() => loadUserProfile()}>
                        <i className="fa fa-refresh" aria-hidden="true"></i>
                      </Button>
                    </div>
                  </Row>
                </ModalFooter>
              </Modal>
              <Button className="list-button" onClick={() => toggle('Projects')} color="secondary">
                Projects
              </Button>
              <Modal isOpen={menuModalTabletScreen === 'Projects'} toggle={toggle}>
                <ModalHeader toggle={toggle}>Projects</ModalHeader>
                <ModalBody>
                  <ProjectsTab
                    userProjects={userProfile.projects || []}
                    userTasks={tasks}
                    projectsData={props?.allProjects?.projects || []}
                    onAssignProject={onAssignProject}
                    onDeleteProject={onDeleteProject}
                    edit={hasPermission(requestorRole, 'editUserProfile', roles, userPermissions)}
                    role={requestorRole}
                    userPermissions={userPermissions}
                    userId={props.match.params.userId}
                    updateTask={onUpdateTask}
                  />
                </ModalBody>
                <ModalFooter>
                  <Row>
                    <div className="profileEditButtonContainer">
                      {canEdit &&
                        (activeTab == '1' ||
                          hasPermission(
                            requestorRole,
                            'editUserProfile',
                            roles,
                            userPermissions,
                          )) && (
                          <>
                            <SaveButton
                              className="mr-1 btn-bottom"
                              handleSubmit={handleSubmit}
                              disabled={
                                !formValid.firstName ||
                                !formValid.lastName ||
                                !formValid.email ||
                                !changed
                              }
                              userProfile={userProfile}
                            />
                            <span
                              onClick={() => {
                                setUserProfile(originalUserProfile);
                                setTasks(originalTasks);
                                setChanged(false);
                              }}
                              className="btn btn-outline-danger mr-1 btn-bottom"
                            >
                              X
                            </span>
                          </>
                        )}
                      <Button outline onClick={() => loadUserProfile()}>
                        <i className="fa fa-refresh" aria-hidden="true"></i>
                      </Button>
                    </div>
                  </Row>
                </ModalFooter>
              </Modal>
              <Button
                className="list-button"
                onClick={() => toggle('Edit History')}
                color="secondary"
              >
                Edit History
              </Button>
              <Modal isOpen={menuModalTabletScreen === 'Edit History'} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit History</ModalHeader>
                <ModalBody>
                  <TimeEntryEditHistory
                    userProfile={userProfile}
                    setUserProfile={setUserProfile}
                    setChanged={setChanged}
                    role={requestorRole}
                    roles={roles}
                    userPermissions={userPermissions}
                  />
                </ModalBody>
                <ModalFooter>
                  <Row>
                    <div className="profileEditButtonContainer">
                      {canEdit &&
                        (activeTab == '1' ||
                          hasPermission(
                            requestorRole,
                            'editUserProfile',
                            roles,
                            userPermissions,
                          )) && (
                          <>
                            <SaveButton
                              className="mr-1 btn-bottom"
                              handleSubmit={handleSubmit}
                              disabled={
                                !formValid.firstName ||
                                !formValid.lastName ||
                                !formValid.email ||
                                !changed
                              }
                              userProfile={userProfile}
                            />
                            <span
                              onClick={() => {
                                setUserProfile(originalUserProfile);
                                setTasks(originalTasks);
                                setChanged(false);
                              }}
                              className="btn btn-outline-danger mr-1 btn-bottom"
                            >
                              X
                            </span>
                          </>
                        )}
                      <Button outline onClick={() => loadUserProfile()}>
                        <i className="fa fa-refresh" aria-hidden="true"></i>
                      </Button>
                    </div>
                  </Row>
                </ModalFooter>
              </Modal>
            </List>
          </Col>
        </Row>
        <Row>
          <Col md="4"></Col>
          <Col md="8" className="desktop-panel">
            <div className="profileEditButtonContainer">
              {hasPermission(requestorRole, 'resetPasswordOthers', roles, userPermissions) &&
                canEdit &&
                !isUserSelf && (
                  <ResetPasswordButton className="mr-1 btn-bottom" user={userProfile} />
                )}
              {isUserSelf &&
                (activeTab === '1' ||
                  hasPermission(requestorRole, 'editUserProfile', roles, userPermissions)) && (
                  <Link to={`/updatepassword/${userProfile._id}`}>
                    <Button className="mr-1 btn-bottom" color="primary">
                      {' '}
                      Update Password
                    </Button>
                  </Link>
                )}
              {canEdit &&
                (activeTab === '1' ||
                  hasPermission(requestorRole, 'editUserProfile', roles, userPermissions)) && (
                  <>
                    <SaveButton
                      className="mr-1 btn-bottom"
                      handleSubmit={handleSubmit}
                      disabled={
                        !formValid.firstName || !formValid.lastName || !formValid.email || !changed
                      }
                      userProfile={userProfile}
                    />
                    <span
                      onClick={() => {
                        setUserProfile(originalUserProfile);
                        setTasks(originalTasks);
                        setChanged(false);
                      }}
                      className="btn btn-outline-danger mr-1 btn-bottom"
                    >
                      Cancel
                    </span>
                  </>
                )}
              <Button outline onClick={() => loadUserProfile()}>
                Refresh
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;
