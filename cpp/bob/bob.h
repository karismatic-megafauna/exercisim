#include <iostream>
#include <string>

//#define EXERCISM_RUN_ALL_TESTS
class bob 
{
	public:
		bob();
		static bool yelling(std::string);
		static std::string hey(std::string);
	private:

};

bob::bob()
{
	std::cout << "inside bob" << std::endl;
}

std::string bob::hey(std::string s1)
{
	/*
	   pull off the final character in the string"
	   have a switch statement which sets the return value
	   based on the last character.
	   then return it
     */
	std::string ret_str;
	bool upper = yelling(s1);
	char& final_char = s1.back();

	if (final_char == '?') {
		ret_str = "Sure.";
	} else if (final_char == '!') {
		ret_str = "Whoa, chill out!";
	} else if (final_char == '.') {
		ret_str = "Whatever.";
	} else {
		ret_str = "Fine. Be that way!";
	}
	
	std::cout << "Found " << final_char << " Returning: " << ret_str << std::endl;
	return ret_str;
}

bool bob::yelling(std::string s1)
{
	bool ret_val = true;
	for(int i = 0; i < s1.length(); i++)
	{
		if (isupper(s1[i]) == false)
		{	
			ret_val = false;
			break;
		}
	}
	return ret_val;
}