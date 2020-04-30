import React,{ useState } from "react";
import {Button, Link, DialogTitle, Dialog, LinearProgress, DialogActions, DialogContent, DialogContentText} from '@material-ui/core/';

import showIcon from '../../Assets/Images/eye for password.png'
import PasswordStrengthMeter from './PasswordStrengthMeter';

export default function Modal() {
  const [open, setOpen] = React.useState(false);
  const [currPwd, setcurrPwd] = useState("");
  const [newPwd, setnewPwd] = useState("");
  const [verifyPwd, setverifyPwd] = useState("");
  const [showValCurr, setshowValCurr] = useState(false);
  const [showValNew, setshowValNew] = useState(false);
  const [showValVer, setshowValVer] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleShowCurr = (event) => {
    event.preventDefault()
    setshowValCurr(!showValCurr)
  }

  const toggleShowNew = (event) => {
    event.preventDefault()
    setshowValNew(!showValNew)
  }

  const toggleShowVerify = (event) => {
    event.preventDefault()
    setshowValVer(!showValVer)
  }
  return (
    <div>
        <div className="pwdLink">
            <Link onClick={handleClickOpen}>Change Password</Link>
        </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Change Password"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <form>
        <div className="current">
            <label>
                <p>Current Password</p>
                <input
                className="inputBox"
                type={showValCurr ? "text" : "password"}
                value={currPwd}
                onChange={e => setcurrPwd(e.target.value)}
                />
            </label>
            <button className="btnCustom" onClick={toggleShowCurr}>
                <img style={{width:'75%'}} src={showIcon} />
            </button>
        </div>
        <div className="new">
            <label>
                <p>New Password</p>
                <input
                    className="inputBox"
                type={showValNew ? "text" : "password"}
                value={newPwd}
                onChange={e => setnewPwd(e.target.value)}
                />
            </label>
            <button className="btnCustom" onClick={toggleShowNew}>
                <img style={{width:'75%'}} src={showIcon} />
            </button>  
        </div>
     
        <div className="verify">
            <label>
                <p>Verify Password</p>
                <input
                    className="inputBox"
                    type={showValVer ? "text" : "password"}
                    value={verifyPwd}
                    onChange={e => setverifyPwd(e.target.value)}
                />
            </label>
            <button className="btnCustom" onClick={toggleShowVerify}>
                <img style={{width:'75%'}} src={showIcon} />
            </button>
        </div>
    </form>
    <div className="strength">
        <p>Strength (Why?) :</p>
        <PasswordStrengthMeter password={newPwd} />
    </div>
    
    </DialogContentText>
    </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="pwdbtn">
            Save Password
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
