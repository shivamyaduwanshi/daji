import './CalculateCost.scss';

const CalculateCost = () => {
  return (
    <div className="calculate-cost">
        <p>Calculate you const of construction</p>
        <form>
               <select name="state" className="form-control">
                 <option value="">Select State</option>
                 <option value="mp">M.P</option>
                 <option value="mp">M.P</option>
                 <option value="mp">M.P</option>
                 <option value="mp">M.P</option>
               </select>
               <select name="state" className="form-control">
                 <option value="">Select City</option>
                 <option value="mp">M.P</option>
                 <option value="mp">M.P</option>
                 <option value="mp">M.P</option>
                 <option value="mp">M.P</option>
               </select>
               <button>Calculate now</button>
        </form>
    </div>
  )
}

export default CalculateCost