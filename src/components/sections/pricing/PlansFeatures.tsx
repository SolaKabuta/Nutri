import {plansFeatures, basicPlan, premiumPlan, ultimatePlan } from "@/data/plansFeatures";


// interface Features {
//   propName: type;
// }



const PlansFeatures = () => {
  

  
  return (
    <main>
      <section className="bg-accent-var  grid grid-cols-4 place-items-center p-10 -space-14 mb-16 mx-24">
        {/* -- First Column -- */}
        {plansFeatures.map((item, index) => (
          <div key={index} className="rounded-lg text-center md:text-left border-r pt-8 w-full">
            <table>
             <tr>
              <th className="font-semibold bg-primary  rounded-lg p-6 w-full"><span className="text-white">{item.label}</span></th>
             </tr> 
              <tr className="grid [&_th]:p-4 [&_th]:py-8 [&_th]:border-b [&_th]:font-medium">
                <th>{item.feature1}</th>
                <th>{item.feature2}</th>
                <th>{item.feature3}</th>
                <th>{item.feature4}</th>
                <th>{item.feature5}</th>
                <th>{item.feature6}</th>
                <th>{item.feature7}</th>
                <th>{item.feature8}</th>
                <th>{item.feature9}</th>
                <th className="border-none">{item.feature10}</th>
              </tr>
            </table>
          </div>
        ))}
        {/* -- Second Column -- */}
        {basicPlan.map((item, index) => (
          <div key={index} className="text-center border-b pt-8 w-54">
              <p className="font-semibold bg-primary  rounded-lg p-6 w-full"><span className="text-white">{item.label}</span></p>
          </div>
        ))}
        {/* -- Third Column -- */}
        {premiumPlan.map((item, index) => (
          <div key={index} className="text-center border-b pt-8 w-54">
              <p className="font-semibold bg-primary  rounded-lg p-6 w-full"><span className="text-white">{item.label}</span></p>
          </div>
        ))}
        {/* -- Fourth Column -- */}
        {ultimatePlan.map((item, index) => (
          <div key={index} className="text-center border-b pt-8 w-54">
              <p className="font-semibold bg-primary  rounded-lg p-6 w-full"><span className="text-white">{item.label}</span></p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default PlansFeatures;