import mettl

# Writing public and private key json in file 
def WriteJson(pub_key, pri_key):    
    import os, json        
    # CUR_DIR = os.getcwd()
    
    FILE_PATH = mettl.__file__.rsplit("/",1)[0]
    FILE_NAME = os.path.join(FILE_PATH, 'mettl_auth_keys.json')
    FILE_DATA = {
        'PUBLIC_KEY' : pub_key,
        'PRIVATE_KEY' : pri_key,
    }

    with open(FILE_NAME, 'w+') as outfile:
        json.dump(FILE_DATA, outfile)
        print ("Authentication keys are being saved in {0} !".format(FILE_NAME))

# Ask to user for input of public and private key having lenght more than 10
def PromptKey():
    pub_key, pri_key = 'blank123456', 'blank123456' 
    pub_key_flag = True
    while pub_key_flag:
        try :
            pub_key = str(raw_input("Please enter your Public Key : "))
            if len(pub_key) == 36 :
                pub_key_flag = False
            else :
                print ("The key must be 36 character long !")                    
        except Exception as e:
            print (e)                
            pub_key_flag = False
    pri_key_flag = True
    while pri_key_flag:
        try :
            pri_key = str(raw_input("Please enter your Private Key : "))
            if len(pri_key) == 36 :
                pri_key_flag = False
            else :
                print ("The key must be 36 character long !")
        except Exception as e :
            print (e)
            pri_key_flag = False
    return pub_key, pri_key      


# main file which will call other module methods
def main():    
	pub_key, pri_key = PromptKey()
	WriteJson(pub_key, pri_key)	
