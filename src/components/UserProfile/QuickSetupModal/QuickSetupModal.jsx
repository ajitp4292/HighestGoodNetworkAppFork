import { useState, useEffect } from 'react';
import AssignSetUpModal from './AssignSetupModal';
import QuickSetupCodes from './QuickSetupCodes';
import SaveButton from '../UserProfileEdit/SaveButton';
import AddNewTitleModal from './AddNewTitleModal';
import { getAllTitle } from '../../../actions/title';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './QuickSetupModal.css';
import '../../Header/DarkMode.css'
import { connect, useSelector } from 'react-redux';
import { boxStyle, boxStyleDark } from 'styles';
import hasPermission from 'utils/permissions';

function QuickSetupModal(props) {
  const darkMode = useSelector(state => state.theme.darkMode)
  const canViewTitle=props.hasPermission('viewTitle')
  const canAddTitle=props.hasPermission('addNewTitle')
  const canAssignTitle=props.hasPermission('assignTitle')
  const [showAddTitle, setShowAddTitle] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [titles, setTitles] = useState([]);
  const [curtitle, setTitleOnClick] = useState('');
  const [titleOnSet, setTitleOnSet] = useState(true);

  const [showMessage, setShowMessage] = useState(false);
  const [warningMessage, setWarningMessage] = useState({});

  useEffect(() => {
    getAllTitle()
      .then(res => {
        setTitles(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  // refresh the QSCs after CREATE/DELETE operations on titles
  const refreshModalTitles = () => {
    getAllTitle()
      .then(res => {
        setTitles(res.data);
      })
      .catch(err => console.log(err));
  };

  //handle save changes
  const handleSaveChanges = () => {
    handleSubmit()
      .then(() => {
        setTitleOnSet(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="container pt-3">
      {canViewTitle &&
      <QuickSetupCodes
        setSaved={props.setSaved}
        userProfile={props.userProfile}
        setUserProfile={props.setUserProfile}
        titles={titles}
        setShowAssignModal={setShowAssignModal}
        setTitleOnClick={setTitleOnClick}
      />}

       <div className="col text-center mt-3">
        {canAddTitle ? (
          <Button color="primary" onClick={() => setShowAddTitle(true)} style={darkMode ? boxStyleDark : boxStyle}>
            Add A New Title
          </Button>
        ) : (
          ''
        )}
      </div>
      <div className="col text-center mt-3">
        {canAddTitle ? (
          <SaveButton
            handleSubmit={props.handleSaveChanges}
            userProfile={props.userProfile}
            disabled={titleOnSet}
            setSaved={() => props.setSaved(true)}
            darkMode={darkMode}
          />
        ) : (
          ''
        )}
      </div>
      {showAddTitle ? (
        <AddNewTitleModal
          teamsData={props.teamsData}
          projectsData={props.projectsData}
          isOpen={showAddTitle}
          setIsOpen={setShowAddTitle}
          refreshModalTitles={refreshModalTitles}
          setWarningMessage={setWarningMessage}
          setShowMessage={setShowMessage}
        />
      ) : (
        ''
      )}
      {canAssignTitle && showAssignModal ? (
        <AssignSetUpModal
          setSaved={() => props.setSaved(true)}
          handleSubmit={props.handleSubmit}
          userProfile={props.userProfile}
          setUserProfile={props.setUserProfile}
          isOpen={showAssignModal}
          setIsOpen={setShowAssignModal}
          toggle={setShowAssignModal}
          title={curtitle}
          setTitleOnSet={setTitleOnSet}
          refreshModalTitles={refreshModalTitles}
        />
      ) : (
        ''
      )}
      {showMessage && (
        <Modal isOpen={showMessage} toggle={() => setShowMessage(false)} className={darkMode ? 'text-light dark-mode' : ''}>
          <ModalHeader toggle={() => setShowMessage(false)} className={darkMode ? 'bg-space-cadet' : ''}>{warningMessage.title}</ModalHeader>
          <ModalBody className={darkMode ? 'bg-yinmn-blue' : ''}>{warningMessage.content}</ModalBody>
          <ModalFooter className={darkMode ? 'bg-yinmn-blue' : ''}>
            <Button color="primary" onClick={() => setShowMessage(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      )} 
    </div> 
  );
}



export default connect(null,{hasPermission})(QuickSetupModal);
