

const Carts = ({ carts, handlePrepared, currentlyCooking, totalTime, totalCalories }) => {

  return (
    <div className=' bg-white border-solid border-2 border-black rounded-3xl px-7 pt-7 sticky top-0'>
      <div>
        <h1 className="text-center text-black font-bold">Want To Cook: {carts.length}</h1>
        <hr className="mt-5" />
        <table className="table-fixed mt-5">
          <thead>
            <tr>
              <th>No</th>
              <th className="w-[100px]">Name</th>
              <th className="w-[100px]">Time</th>
              <th className="w-[100px]">Calories</th>
            </tr>
          </thead>
          <tbody className="text-center bg-gray-100  ">

            {
              carts.map(cart =>
                <tr key={cart.recipe_name}>
                  <td>{carts.indexOf(cart) + 1}</td>
                  <td className="w-[100px]">{cart.recipe_name.slice(0, 12)}</td>
                  <td className="w-[100px]">{cart.preparing_time}</td>
                  <td className="w-[100px]">{cart.calories}</td>
                  <td><button onClick={() => handlePrepared(cart.recipe_id)} className="btn bg-[#0BE58A] text-black rounded-full border-none">Preparing</button></td>
                </tr>

              )

            }

          </tbody>
        </table>
        <hr className="mt-5" />
        <h1 className="text-center mt-5 text-black font-bold">Currently Cooking {currentlyCooking.length}</h1>
        <hr className="mt-5" />
        <table className="table-auto mt-5">
          <thead>
            <tr>
              <th>No</th>
              <th className="w-[100px]">Name</th>
              <th className="w-[100px]">Time</th>
              <th className="w-[200px]">Calories</th>
            </tr>
          </thead>
          <tbody className="text-center bg-gray-100 w-full">
            {
              currentlyCooking.map(cart =>
                <tr key={cart.recipe_name}>
                  <td>{currentlyCooking.indexOf(cart) + 1}</td>
                  <td className="w-[100px]">{cart.recipe_name.slice(0, 12)}</td>
                  <td className="w-[100px]">{cart.preparing_time}</td>
                  <td className="w-[200px]">{cart.calories}</td>
                </tr>
              )
            }
          </tbody>
        </table>
        <hr className="mt-5" />
        <div className="text-end mt-5">
          <h1>Total time: {totalTime} minutes</h1>
          <h1>Total Calories: {totalCalories} Calories</h1>
        </div>
      </div>
    </div>
  );
};

export default Carts;