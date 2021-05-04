
# d = Round.new
# d.win = true
# d.complete = true
# d.save
# c = Round.new
# c.win = true
# c.complete = true
# c.save
# b = Round.new
# b.win = true
# b.complete = true
# b.save

# # temp word bank
# words = ["fancy
# internal
# whimsical
# "]
# new_words = words[0].split("\n")
# # new_words.each do |word|
# #     w = Word.new
# #     w.name = word
# #     w.round_id = 0
# #     w.save
# # end

# w1 = Word.new
# w1.name = new_words[0]
# w1.round_id = 1
# w1.save
# w2 = Word.new
# w2.name = new_words[1]
# w2.round_id = 2
# w2.save
# w3 = Word.new
# w3.name = new_words[2]
# w3.round_id = 3
# w3.save

words = ["fancy
internal
whimsical
dinner
suggestion
hurl
defeated
curtain
married
uptight
honorable
tranquil
wide-eyed
immolate
wet
vague
superb
deny
advice
intelligent
download
scared
waggish
vegetable
slave
infamous
delightful
move
chief
addition
exclaim
nervous
afterthought
poison
weave
finger
bat
nerve
fumbling
depend
let
fish
end
frantic
trite
game
excited
jellyfish
believe
relate
run
receptive
receipt
convince
ashamed
step
guitar
expansion
sink
drive
board
hose
cluttered
smell
remake
mould
guitar
nervous
contest
early
island
coat
vulgar
bear
soft
rise
new
guess
government
cross
oafish
gorgeous
sharp
foregoing
size
brake
abrupt
fast
van
owl
hose
absorbing
quarrelsome
square
hew
clumsy
nimble
cowardly
various
thundering
initiate
nail
nimble
maid
improve
share
screw
drop
subscribe
humorous
back
frail
marvelous
voracious
unkempt
country
actor
vase
belong
guttural
noise
construe
wary
choose
regret
weak
massive
automatic
steal
limp
second-hand
infuse
hammer
efficacious
connection
representative
giraffe
spell
sink
glow
wed
note
nest
great
erase
condemned
name
favour
wish
minute
sea
page
political
spring
sacrifice
mew
grass
abundant
direct
unarmed
tire
include
alive
delete
plan
opt
scarf
easy
black-and-white
incise
incise
glistening
songs
spill
match
oval
chin
cleave
work
wire
utter
plastic
color
painful
kiss
fax
grubby
earsplitting
sock
tendency
rural
answer
tongue
alive
cause
able
vacation
migrate
deny
property
note
mountainous
competition
powerful
retch
idiotic
straight
ask
say
angry
conspire
spiky
imbibe
nip
tight
confiscate
grain
blur
note
morning
light
cherry
bury
birth
like
step
stove
bath
box
sheet
well-groomed
faucet
yellow
report
insure
advertisement
wry
school
liquid
gainful
connection
fry
wandering
wide-eyed
infamous
pause
freeze
ill
sash
omniscient
puffy
ethereal
cut
vest
sleepy
snails
wretched
rend
slip
toy
sisters
elegant
jumbled
gorgeous
locket
please
train
cautious
church
confused
partake
corn
construe
tee
notebook
"]
split_words = words[0].split("\n")

split_words.each do |word|
    w = Word.new
    w.name = word
    w.save
end

for a in 1...5 do
    r = Round.new
    n = rand(Word.all.length)
    r.word_id = Word.find_by_id(n).id
    rand(2) < 1 ? r.win = false : r.win = true
    r.win == true ? r.guesses = rand(6) : r.guesses = 5
    r.complete = true
    r.save
end