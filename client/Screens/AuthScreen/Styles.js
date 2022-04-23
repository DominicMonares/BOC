import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  fieldContainer: {
    flex: 1
  },
  fields: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  field: {
    backgroundColor: 'white',
    width: 275,
    height: 50,
    marginTop: 2,
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    fontFamily: 'comicSans',
    borderWidth: 1
  },
  fieldLabels: {
    color: 'white',
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'comicSans'
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    alignItems: 'center'
  },
  button: {
    width: 150,
    height: 50,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 10,
    borderWidth: 1
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'comicSans',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto'
  }
})
