import React from "react";
import styled from "styled-components";
const DateForm = styled.form`
    margin-left: 5%;
`;
export default function PickDate(today, updateDate) {
    console.log(today.today);
    console.log(updateDate);
    // useEffect(){}
    return (
        <DateForm>
            <label htmlFor="updateDate">
                Select the day you would like to view:
                <input
                    type="date"
                    name="updateDate"
                    required
                    min="1995-06-01"
                    max={today.today}
                    // value="{today.today}"
                />
            </label>
            <p>
                <button>Submit</button>
            </p>
        </DateForm>
    );
}
