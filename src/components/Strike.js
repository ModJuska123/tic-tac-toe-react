function Strike({ winningStrike }) {
    if (!winningStrike) {
        return null;
    }
       
    const getStrikeClass = () => {
        const combinations = {
            "0,1,2": "strike-row-1",
            "3,4,5": "strike-row-2",
            "6,7,8": "strike-row-3",
            "0,3,6": "strike-col-1",
            "1,4,7": "strike-col-2",
            "2,5,8": "strike-col-3",
            "0,4,8": "strike-diag-1",
            "2,4,6": "strike-diag-2"
          };
          return combinations[winningStrike.toString()];

        };
        return <div className={`strike ${getStrikeClass()}`}></div>
    }
    
export default Strike;