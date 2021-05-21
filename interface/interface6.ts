interface Connector{ 
   doConnect(): boolean; 
}

class WifiConnector implements Connector{ 
    public doConnect(): boolean{ 
    	return true;
    }
}

class BluetoothConnector implements Connector{     
	public doConnect(): boolean{         
		return true     
	} 
}

class System {     
	constructor(private connector: Connector){ 
		#inject Connector type         
		connector.doConnect()     
	} 
}