import  React,  { Component, Proptypes } from  'react';  
import  { 
Alert,  
ScrollView,
StyleSheet,
Text,
TextInput,
TouchableOpacity,
View
} from  'react-native'; 

var url = 'http://mhs.rey1024.com/1415051094/adduser.php'; 
  
class mainApp extends Component { 
constructor(props) {
    super(props);
    this.state = {
      nama: "",
      notelp: "",
      alamat: "",
      email: "",
    };
  }

  onSave() {
    fetch(url + '?nama=' + this.state.nama + '&notelp=' + this.state.notelp + '&alamat=' + this.state.alamat  + '&email=' + this.state.email)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
          Alert.alert("Fail to Input");
         }
         else 
       {
          Alert.alert("Berhasil Input");
        }  
        
      })
      .done();
  }

  
  render () {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.toolbar}>Tambah Driver </Text>
         <TextInput  
          style={styles.input}  
          onChangeText={(e) => this.setState({ nama: e })} 
          text = {this.state.nama}
          placeholder="Nama User" 
        />  
        <TextInput  
          style={styles.input}  
          onChangeText={(e) => this.setState({ notelp: e })} 
          text = {this.state.notelp}
          placeholder="No Telp"  
        />  
        <TextInput  
          style={styles.input}  
          onChangeText={(e) => this.setState({ alamat: e })} 
          text = {this.state.alamat}
          placeholder="Alamat" 
        />  
        <TextInput  
          style={styles.input}  
          onChangeText={(e) => this.setState({ email: e })} 
          text = {this.state.email}
          placeholder="Email"  
        />  
        <TouchableOpacity onPress={() => this.onSave()} style={styles.btn}> 
        <Text>Save!</Text>  
        </TouchableOpacity> 
        </ScrollView> 
      </View> 
    );
  }
}

const styles  = StyleSheet.create({ 
    container:  { 
        flex: 1,  
        backgroundColor:  '#fff', 
    },  
    toolbar:  { 
        backgroundColor:  'orange',  
        color:  '#fff', 
        textAlign:  'center', 
        padding:  25, 
        fontSize: 20, 
    },  
    content:  { 
        flex: 1,  
        padding:  10, 
    },  
    preview:  { 
        backgroundColor:  '#bdc3c7',  
        flex: 1,  
        height: 500,  
    },  
    input:  { 
        backgroundColor:  '#ecf0f1',  
        borderRadius: 3,  
        height: 40, 
        padding:  5,  
        marginBottom: 10, 
        flex: 1,  
    },  
    btn:  { 
        backgroundColor:  'orange',  
        padding:  10, 
        borderRadius: 3,  
        marginBottom: 30, 
    },  
});
export  default mainApp;