/*
    The SetMatches class extends Action and provides a way to set a list
    of match objects (determined by the MatchModel object) in the database.
*/

import MatchInterface from '../../interfaces/match';
import Action from '../action';
import SubmoduleMapInterface from '../../interfaces/submodule-map';

class SetMatch extends Action {
    private match: MatchInterface;

    constructor(SubmoduleMap: SubmoduleMapInterface, match: MatchInterface) {
        super(SubmoduleMap);
        this.match = match;
    }

    public async run(): Promise<void> {
        this.database.upsertMatch(this.match);
    }
}

export default SetMatch;
