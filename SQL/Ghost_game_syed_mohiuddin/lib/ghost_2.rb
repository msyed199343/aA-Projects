 require "set"
 

 class Game
    attr_reader :players 
    ALPHABET = Set.new("a".."z")

    def initialize(*players)
        words = File.readlines("dictionary.txt").map(&:chomp)
        @dictionary = Set.new(words)
        @players = players
        @fragment = ""
        @loses = Hash.new {|name, loses| name[loses] = 0 }
    end

    def loses
        @loses
    end

    def fragment
        @fragment
    end


    def start
   puts self.display_standings
        until self.game_loser? == true
            puts self.display_standings
            until self.round_loser? == true
                puts self.display_standings
                puts "hey there #{self.current_player}!  Enter a character!"
                char_entered = gets.chomp.to_s.downcase
                    if ALPHABET.include?(char_entered)
                        @fragment += char_entered
                        self.next_turn
                        else
                        puts self.display_standings
                        puts "WOOPS! Please go ahead and enter a letter from the english alphabet.  Thank you!"
                    end
            end
            @fragment.clear
        end
    end

   def next_turn
    @players.rotate!
   end

    def current_player
        @players.first
    end

    def previous_player
        @players[@players.index(self.current_player) -1 % @players.length]
    end


   

    def min_players?
      return false  if @players.length<2   
            return true
    end

    def round_loser?
        if @fragment.length>=3 && @dictionary.include?(@fragment)
            puts "Ouch!  You lose the round #{self.previous_player}." 
            @loses[self.previous_player] += 1 
        else
            return false
        end
        
    end

    def challenge

    end

    def game_loser?
        @loses.each do |name, loses| 
           if loses == 5  
            return true 
           else
            return false
           end
        end
    end


    
    def display_standings
         standings = ""
        @loses.each do |name, loses| 
            standings += "#{name}: #{loses} " 
        end
        puts standings
    end


end
  
    


new_gamu = Game.new("Mashu", "Syed")
p new_gamu.start
p new_gamu.display_standings
