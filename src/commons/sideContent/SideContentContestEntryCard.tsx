import { Card, Classes, Pre } from '@blueprintjs/core';
import React from 'react'; 

import { ContestEntry } from '../assessment/AssessmentTypes'

type SideContentConstestEntryCardProps = DispatchProps & StateProps

// to be adjusted based on how to react to onClick
type DispatchProps = {
    handleContestEntryClick: (studentUsername: string, program: string) => void; 
}

type StateProps = {
    contestEntry: ContestEntry 
}

const SideContentContestEntryCard: React.FunctionComponent<SideContentConstestEntryCardProps> = props => {
    const { handleContestEntryClick, contestEntry } = props; 

    return (
        <div>
            <Card className={Classes.INTERACTIVE} onClick={() => handleContestEntryClick(
                contestEntry.studentUsername,
                contestEntry.program
            )}>
                <Pre>{contestEntry.studentUsername}</Pre>
                <Pre>Score</Pre>
            </Card>
        </div>
    )
}

export default SideContentContestEntryCard
