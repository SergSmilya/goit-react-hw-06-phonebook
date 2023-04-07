import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { chancheFilterValue } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();

  function searchFilter(e) {
    const value = e.target.value.toLowerCase();
    dispatch(chancheFilterValue(value));
  }

  return (
    <div>
      <Formik initValueFilter={{ filter: '' }}>
        <label>
          Search
          <Field type="text" name="filter" onChange={searchFilter}></Field>
        </label>
      </Formik>
    </div>
  );
}

// export default function Filter({ onFilterControl }) {
//   function searchFilter(e) {
//     const value = e.target.value.toLowerCase();
//     onFilterControl(value);
//   }

//   return (
//     <div>
//       <Formik initValueFilter={{ filter: '' }}>
//         <label>
//           Search
//           <Field type="text" name="filter" onChange={searchFilter}></Field>
//         </label>
//       </Formik>
//     </div>
//   );
// }
