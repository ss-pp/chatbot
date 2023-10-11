def generate_response(user_message):
    user_message = user_message.lower()

    if "hello" in user_message:
        bot_response = "Hello! How can I assist you today?"
    elif "how are you" in user_message:
        bot_response = "I'm just a computer program, so I don't have feelings, but I'm here to help!"
    elif "what is 1+1" in user_message:
        bot_response = "1+1 = 2"
    elif "tell me about football" in user_message:
        bot_response = "football, or association football or soccer, Game in which two 11-member teams try to propel a ball into the opposing team’s goal, using any part of the body except the hands and arms. Only the goalkeeper, when positioned within the penalty area in front of the goal, may use hands and arms. The game’s first uniform set of rules was put in place in 1863, when England’s Football Association was created. Professional leagues began appearing in the late 1880s, first in England and then in other countries. The Fédération Internationale de Football Association (FIFA) was founded in 1904, and has hosted the World Cup every four years since 1930. Football has been included in the Olympic Games since 1908. Now played on all continents in over 200 countries, with over 250 million players, it is the world’s most popular ball game." 
    elif "bye" in user_message:
        bot_response = "Goodbye! Have a great day!"
    elif "tell me about cricket" in user_message:
        bot_response = "Cricket is played with a bat and ball and involves two competing sides (teams) of 11 players. The field is oval with a rectangular area in the middle, known as the pitch, that is 22 yards (20.12 metres) by 10 feet (3.04 metres) wide. Two sets of three sticks, called wickets, are set in the ground at each end of the pitch."
    elif "hey" in user_message:
        bot_response = "hey...how are you"
    elif "im fine" in user_message:
        bot_response = "good to hear... have a great day ahead"
    elif "hi" in user_message:
        bot_response = "i am good and how are you doing by the way"
    elif "im doing good honestly" in user_message:
        bot_response = "good to hear"
    else:
        bot_response = "I'm sorry, I don't understand. Please ask another question."
    return bot_response

#if u want to integrate it with open chatgpt/open ai format integration then purchase an api key and insert it in the below code
#import openai

# Set your OpenAI API key here
#api_key = 'YOUR_API_KEY_HERE'

#
    # Initialize the OpenAI API client
    #openai.api_key = api_key

    # Define the conversation prompt
   # conversation_prompt = f"You: {user_message}\nBot:"

    # Use OpenAI's GPT-3 to generate a response
    ##response = openai.Completion.create(
       ### engine="davinci",  # You can experiment with different engines
        #prompt=conversation_prompt,
        #max_tokens=50  # Adjust the max_tokens as needed
    #)

    # Extract and return the bot's response
    #bot_response = response.choices[0].text.strip()
    
    #return bot_response
