function Food(props) {
  const { isFress, froutsName } = props;
  if (isFress) {
    return <p style={{
        color:'orange',
        fontSize: '2rem'
    }}>Ami {froutsName} khabo</p>;
  }
  return <p style={{
    color:'orange',
    fontSize: '2rem'
}}>ami {froutsName} khabona</p>;
}

export default Food;
