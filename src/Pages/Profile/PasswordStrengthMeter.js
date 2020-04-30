import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';

// import './PasswordStrengthMeter.css';

class PasswordStrengthMeter extends Component {
    
    createPasswordLabel = (result) => {
        switch (result.score) {
          case 0:
            return 'Weak';
          case 1:
            return 'Weak';
          case 2:
            return 'Fair';
          case 3:
            return 'Good';
          case 4:
            return 'Strong';
          default:
            return 'Weak';
        }
      }

  render() {
    const { password } = this.props;
    const testedResult = zxcvbn(password);
    console.log("Score is ", testedResult.score)
    return (
            <div className="password-strength-meter">
                <progress
                value={testedResult.score}
                max="4"
                >
                <span>{testedResult.score}</span>
                </progress>
                <br />
                <label
                className="password-strength-meter-label"
                >
                {password && (
                    <>
                    <strong>Password strength:</strong> {this.createPasswordLabel(testedResult)}
                    </>
                )}
                </label>
            </div>
    );
  }
}

export default PasswordStrengthMeter;