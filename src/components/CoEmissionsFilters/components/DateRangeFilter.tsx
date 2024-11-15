export function DateRangeFilter () {
    return (
        <div>
            <label htmlFor="start">Start date:</label>
            <input type="date" id="start" name="trip-start" value="2022-02-01" min="2022-02-01" max="2022-06-15" />

            <label htmlFor="start">End date:</label>
<           input type="date" id="start" name="trip-start" value="2022-06-15" min="2022-02-01" max="2022-06-15" />
        </div>
    );
}